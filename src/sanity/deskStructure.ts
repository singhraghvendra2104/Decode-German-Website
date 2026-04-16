import type { StructureBuilder } from "sanity/structure";

export default (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Articles")
        .child(
          S.list()
            .title("Articles")
            .items([
              S.listItem()
                .title("All Articles")
                .child(
                  S.documentTypeList("article").title("All Articles")
                ),
              S.divider(),
              S.listItem()
                .title("By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Pick a Category")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Articles")
                        .filter(
                          '_type == "article" && category._ref == $categoryId'
                        )
                        .params({ categoryId })
                    )
                ),
            ])
        ),
      S.listItem()
        .title("YouTube Videos")
        .child(
          S.list()
            .title("YouTube Videos")
            .items([
              S.listItem()
                .title("All Videos")
                .child(
                  S.documentTypeList("youtubeVideo").title("All Videos")
                ),
              S.divider(),
              S.listItem()
                .title("By Category")
                .child(
                  S.documentTypeList("category")
                    .title("Pick a Category")
                    .child((categoryId) =>
                      S.documentList()
                        .title("Videos")
                        .filter(
                          '_type == "youtubeVideo" && category._ref == $categoryId'
                        )
                        .params({ categoryId })
                    )
                ),
            ])
        ),
      S.listItem()
        .title("Categories")
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Downloads")
        .child(S.documentTypeList("download").title("Downloads")),
    ]);
