import React, { useState, useCallback } from 'react';
// Custom Hooks
import useAnimations from './hooks/useAnimations';
// Constants
import { DOCUMENT_SCANNER } from './static/index';
import contents from './static/constant';
// Components
import Layout from './components/Layout/Layout';
import { Container, ContentBox, ContentTabButton } from './components/index';

export const App: React.FC = () => {
  const [activeContent, setActiveContent] = useState(DOCUMENT_SCANNER);

  // Custom hook to get animations for each content item
  const animations = useAnimations();

  // Callback function to handle tab change
  const handleTabChange = useCallback(
    (clickedContent: string) => () => {
      setActiveContent(clickedContent);
    },
    [],
  );

  return (
    <Layout>
      <section className="flex flex-col justify-center bg-baseBg overflow-y-auto min-h-full">
        {/* Container to hold the content boxes */}
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

        {/* Navigation bar for content tabs */}
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
