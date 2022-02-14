import S from '@sanity/desk-tool/structure-builder';
import React from 'react';

export default S.listItem()
  .title('Posts by Author')
  .icon(() => <span>🤭</span>)
  .child(
    S.documentTypeList('author').child((authorId) =>
      S.documentList()
        .title('Posts')
        .filter(`_type == 'post' && $authorId match author._ref`)
        .params({ authorId })
    )
  );
