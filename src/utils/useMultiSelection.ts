import { MutableRefObject } from 'react';
import Konva from 'konva';

interface Props {
  stage: Konva.Stage | null;
  isSelectionActiveRef: MutableRefObject<boolean>;
}

export default function useMultiSelection({ stage, isSelectionActiveRef }: Props) {
  // Directly set the stage to not draggable and activate selection
  stage?.draggable(false);
  isSelectionActiveRef.current = true;

  // Optionally, you can define a function to toggle these states
  const toggleSelection = (isActive: boolean) => {
    stage?.draggable(!isActive);
    isSelectionActiveRef.current = isActive;
  };

  // Example usage:
  // toggleSelection(true); // to activate selection
  // toggleSelection(false); // to deactivate selection
}