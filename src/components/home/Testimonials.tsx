"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Modal,
  Rating,
  Textarea,
  TextInput,
  Notification,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { supabase, type Review } from "@/lib/supabase";

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "absolute top-4 left-4 w-8 h-8 text-primary opacity-20"}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

function Stars({ rating, activeClass }: { rating: number; activeClass?: string }) {
  const active = activeClass ?? "text-primary";
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? active : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.196-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.049 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function formatMonthYear(iso: string) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

type CardVariant = "default" | "primary";

function ReviewCard({
  review,
  variant = "default",
}: {
  review: Review;
  variant?: CardVariant;
}) {
  const isPrimary = variant === "primary";

  const cardClass = isPrimary
    ? "bg-primary text-white"
    : "bg-white text-gray-700";
  const quoteClass = isPrimary
    ? "absolute top-4 left-4 w-8 h-8 text-white opacity-30"
    : "absolute top-4 left-4 w-8 h-8 text-primary opacity-20";
  const messageClass = isPrimary
    ? "text-sm md:text-base text-white/95 italic mb-6 relative z-10 line-clamp-6"
    : "text-sm md:text-base text-gray-700 italic mb-6 relative z-10 line-clamp-6";
  const dividerClass = isPrimary ? "border-white/20" : "border-gray-100";
  const avatarClass = isPrimary
    ? "bg-white text-primary"
    : "bg-primary text-white";
  const nameClass = isPrimary
    ? "font-bold text-xs tracking-widest uppercase truncate text-white"
    : "font-bold text-xs tracking-widest uppercase truncate";
  const verifiedClass = isPrimary
    ? "text-[10px] text-white/80 font-medium uppercase tracking-wider"
    : "text-[10px] text-primary font-medium uppercase tracking-wider";
  const starActive = isPrimary ? "text-white" : "text-primary";

  return (
    <div
      className={`relative rounded-xl shadow-sm p-6 md:p-7 w-[320px] md:w-[360px] shrink-0 flex flex-col ${cardClass}`}
    >
      <QuoteIcon className={quoteClass} />
      <div className="pt-6">
        <div className="flex items-center justify-between mb-3">
          <Stars rating={review.rating} activeClass={starActive} />
          <span
            className={`text-[11px] font-medium uppercase tracking-wider ${
              isPrimary ? "text-white/70" : "text-gray-400"
            }`}
          >
            {formatMonthYear(review.created_at)}
          </span>
        </div>
        <p className={messageClass}>&ldquo;{review.message}&rdquo;</p>
      </div>
      <div className={`flex items-center gap-3 mt-auto pt-4 border-t ${dividerClass}`}>
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${avatarClass}`}
        >
          {getInitials(review.name)}
        </div>
        <div className="min-w-0">
          <h4 className={nameClass}>{review.name}</h4>
          {review.verified && <p className={verifiedClass}>Verified Student</p>}
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  reviews,
  direction,
  variant = "default",
}: {
  reviews: Review[];
  direction: "left" | "right";
  variant?: CardVariant;
}) {
  // Duplicate the list so the translate(-50%) loop is seamless.
  const doubled = [...reviews, ...reviews];
  const animClass =
    direction === "left"
      ? "testimonial-marquee-left"
      : "testimonial-marquee-right";

  return (
    <div className="testimonial-marquee-row overflow-hidden">
      <div className={`testimonial-marquee ${animClass}`}>
        {doubled.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} variant={variant} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (cancelled) return;
      if (error) {
        setError(error.message);
      } else {
        setReviews((data ?? []) as Review[]);
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Split reviews into 3 balanced rows (round-robin keeps row lengths equal
  // so all rows finish their marquee loop at roughly the same cadence).
  const rows = useMemo(() => {
    const r: [Review[], Review[], Review[]] = [[], [], []];
    reviews.forEach((review, i) => r[i % 3].push(review));
    return r;
  }, [reviews]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName,
          reviewer: formEmail,
          message: formMessage,
          rating: formRating,
        }),
      });
      const json = await res.json();
      if (!res.ok) {
        setSubmitError(json.error || "Something went wrong");
      } else {
        setSubmitSuccess(true);
        setFormName("");
        setFormEmail("");
        setFormMessage("");
        setFormRating(5);
        setTimeout(() => {
          closeModal();
          setSubmitSuccess(false);
        }, 1800);
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-accent overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 lg:mb-20 relative px-4 md:px-6">
          <h2 className="text-5xl md:text-7xl font-[var(--font-serif)] font-bold opacity-10 absolute left-0 right-0 -translate-y-8 md:-translate-y-12 select-none pointer-events-none hidden md:block">
            TESTIMONIALS
          </h2>
          <h2 className="text-3xl md:text-5xl font-[var(--font-serif)] font-bold relative z-10">
            Voices of Transformation
          </h2>
          <div className="mt-8 relative z-10">
            <Button
              onClick={openModal}
              size="md"
              radius="xl"
              variant="filled"
              color="dark"
            >
              + Add Your Review
            </Button>
          </div>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading reviews…</p>
        )}

        {error && (
          <p className="text-center text-red-600 mb-8 px-4">
            Failed to load reviews: {error}
          </p>
        )}

        {!loading && !error && reviews.length === 0 && (
          <p className="text-center text-gray-500">
            No reviews yet. Be the first to share your story.
          </p>
        )}

        {/* 3-row infinite marquee */}
        {reviews.length > 0 && (
          <div className="flex flex-col gap-6">
            <MarqueeRow reviews={rows[0]} direction="left" />
            <MarqueeRow reviews={rows[1]} direction="right" />
            <MarqueeRow reviews={rows[2]} direction="left" />
          </div>
        )}
      </div>

      {/* Add Review Modal */}
      <Modal
        opened={modalOpened}
        onClose={closeModal}
        title="Share your experience"
        centered
        size="md"
        radius="md"
      >
        {submitSuccess ? (
          <Notification color="green" withCloseButton={false} title="Thank you!">
            Your review has been submitted and will appear after approval.
          </Notification>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              label="Your name"
              placeholder="Jane Doe"
              required
              value={formName}
              onChange={(e) => setFormName(e.currentTarget.value)}
              maxLength={120}
            />
            <TextInput
              label="Email (optional)"
              placeholder="jane@example.com"
              type="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.currentTarget.value)}
              maxLength={200}
            />
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <Rating value={formRating} onChange={setFormRating} size="lg" />
            </div>
            <Textarea
              label="Your review"
              placeholder="Tell us about your experience with Decode German…"
              required
              minRows={4}
              autosize
              maxLength={2000}
              value={formMessage}
              onChange={(e) => setFormMessage(e.currentTarget.value)}
            />
            {submitError && (
              <p className="text-sm text-red-600">{submitError}</p>
            )}
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="subtle" color="gray" onClick={closeModal} type="button">
                Cancel
              </Button>
              <Button type="submit" loading={submitting} color="dark">
                Submit Review
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
}
