import { MutableRefObject } from 'react';
import Konva from 'konva';

import useEventListener from './useEventListener';

interface Props {
  stage: Konva.Stage | null;
  isSelectionActiveRef: MutableRefObject<boolean>;
}

export default function useMultiSelection({
  stage,
  isSelectionActiveRef,
}: Props) {
  useEventListener<HTMLDivElement, MouseEvent>(
    'mousedown',
    (event: MouseEvent) => {
      event.stopPropagation();
      if (event.button === 0) { // Left mouse button
        stage?.draggable(false);
        isSelectionActiveRef.current = true;
      }
    },
  );

  useEventListener<HTMLDivElement, MouseEvent>(
    'mouseup',
    (event: MouseEvent) => {
      event.stopPropagation();
      if (event.button === 0) { // Left mouse button
        stage?.draggable(true);
        isSelectionActiveRef.current = false;
      }
    },
  );
}
