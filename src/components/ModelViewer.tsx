import { useEffect } from 'react';
import styled from 'styled-components';
import { getModelSrc } from '../functions/getModelSrc';
import {
  ColourOption,
  DecorationsOption,
  TierOption,
  TopperOption,
} from './select/data';

interface MovelView3dProps {
  selectedTier: TierOption | null;
  selectedColor: ColourOption | null;
  selectedDecorations: DecorationsOption | null;
  selectedTopper: TopperOption | null;
}

// This model viever displays the cuztomized cake model, and updates it when edit values change.

function MovelView3d({
  selectedTier,
  selectedColor,
  selectedDecorations,
  selectedTopper,
}: MovelView3dProps) {
  useEffect(() => {
    // The effect to run when selectedTier or selectedColor changes
    const modelSrc = getModelSrc(
      selectedTier,
      selectedColor,
      selectedDecorations,
      selectedTopper,
    );

    // Update the model-viewer src
    const modelViewer = document.querySelector('.model-viewer');
    if (modelViewer) {
      modelViewer.setAttribute('src', modelSrc);
      modelViewer.setAttribute('preload', 'auto');
    }
  }, [selectedTier, selectedColor, selectedDecorations, selectedTopper]);

  return (
    <Cake>
      <model-viewer
        className="model-viewer"
        src={getModelSrc(
          selectedTier,
          selectedColor,
          selectedDecorations,
          selectedTopper,
        )}
        shadow-intensity="1"
        shadow-softness="1"
        alt="cake-3d-model"
        camera-controls
        touch-action="pan-y"
        style={{ width: '100%', height: '100%' }}
      >
        <div id="progress-bar-d" slot="progress-bar"></div>
      </model-viewer>
    </Cake>
  );
}

const Cake = styled.div`
  background: ${({ theme }) => theme.card};
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
    height: 35rem;
  }
  img {
    height: 80%;
    @media (max-width: 700px) {
      width: auto;
      height: 30rem;
    }
  }
`;

export default MovelView3d;
