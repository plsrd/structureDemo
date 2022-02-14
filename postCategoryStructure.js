import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Posts by Category')
  .child(
    S.documentTypeList('category').child((categoryId) =>
      S.documentList()
        .canHandleIntent(() => S.documentTypeList('post').getCanHandleIntent())
        .title('Posts')
        .filter(`_type == 'post' && $categoryId in categories[]._ref`)
        .params({ categoryId })
    )
  );
