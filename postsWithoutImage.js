import S from '@sanity/desk-tool/structure-builder';
import { ErrorOutlineIcon } from '@sanity/icons';

export default S.listItem()
  .title('Posts without Image')
  .icon(ErrorOutlineIcon)
  .child(
    S.documentList()
      .title('Posts')
      .filter(`_type == 'post' && !defined(mainImage.asset)`)
  );
