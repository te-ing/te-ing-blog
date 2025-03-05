import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments(): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '28px' }}>
      <Giscus
        id="comments"
        repo="te-ing/te-ing-blog"
        repoId="R_kgDOMBNk1A"
        category="Comments"
        categoryId="DIC_kwDOMBNk1M4CnkkL"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
