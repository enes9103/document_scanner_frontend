import React, { useState, useCallback } from 'react';
import contents from './static/constant';
import useAnimations from './hooks/useAnimations';
import { Container, ContentBox, ContentTabButton } from './components/index';
import { DOCUMENT_SCANNER } from './static/index';
import Layout from './components/Layout/Layout';

export const App: React.FC = () => {
  const [activeContent, setActiveContent] = useState(DOCUMENT_SCANNER);

  const animations = useAnimations();

  const handleTabChange = useCallback(
    (clickedContent: string) => () => {
      setActiveContent(clickedContent);
    },
    [],
  );

  return (
    <Layout>
      <section className="flex flex-col justify-center bg-baseBg overflow-y-auto min-h-full">
        <Container>
          {contents.map((content) =>
            activeContent === content.key ? (
              <ContentBox
                {...content}
                key={content.key}
                animateAfter={animations[content.key]}
                isActive={activeContent === content.key}
              />
            ) : null,
          )}
        </Container>

        <nav className="flex justify-between overflow-x-auto snap-x hide-scrollbar">
          {contents.map((content) => (
            <ContentTabButton
              key={content.key}
              svgPath={content.svgPath}
              buttonLabel={content.buttonLabel}
              isActive={activeContent === content.key}
              onClick={handleTabChange(content.key)}
            />
          ))}
        </nav>
      </section>
    </Layout>
  );
};

export default App;
