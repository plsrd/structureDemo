import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import postCategoryStructure from './postCategoryStructure';
import postAuthorStructure from './postAuthorStructure';
import postsWithoutImage from './postsWithoutImage';

const hiddenDocTypes = ['siteSettings', 'anotherSiteSettings'];

const JsonPreview = ({ document }) => (
  <>
    <h1>Json Preview</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);

export const getDefaultDocumentNode = () => {
  return S.document().views([
    S.view.form(),
    S.view.component(JsonPreview).title('JSON'),
  ]);
};

export default () =>
  S.list()
    .title('Blog')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),
      S.listItem()
        .title('Another Site Settings')
        .child(
          S.document()
            .schemaType('anotherSiteSettings')
            .documentId('anotherSiteSettings')
        ),
      S.divider(),
      postsWithoutImage,
      postCategoryStructure,
      postAuthorStructure,
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenDocTypes.includes(listItem.getId())
      ),
    ]);
