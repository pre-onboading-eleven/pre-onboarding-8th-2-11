import * as React from 'react';
import styled from 'styled-components';

interface Issue {
  id: number;
  title: string;
  content: string;
  deadDate: string;
  status: 'todo' | 'doing' | 'done';
  who: string;
  order: number;
}

type Props<DataType> = {
  data: DataType;
  render: (value: Issue) => JSX.Element;
  onDrop?: (data: DataType) => void;
};

const Dnd = <T extends object>({ data, render, onDrop }: Props<T>) => {
  const [state, setState] = React.useState(data);
  const dragRowItem = React.useRef<number | null>(null);
  const dragRowOverItem = React.useRef<number | null>(null);
  const dragColumnItem = React.useRef<string | null>(null);
  const dragColumnOverItem = React.useRef<string | null>(null);

  const dragStart = (
    e: React.DragEvent<HTMLElement>,
    key: string,
    rowIndex: number
  ) => {
    dragRowItem.current = rowIndex;
    dragColumnItem.current = key;
  };

  const dragEnter = (
    e: React.DragEvent<HTMLElement>,
    key: string,
    rowIndex: number
  ) => {
    dragRowOverItem.current = rowIndex;
    dragColumnOverItem.current = key;
  };

  const handleDrop = (_: React.DragEvent<HTMLElement>) => {
    if (dragRowOverItem.current === null || dragRowItem.current === null)
      return;
    if (dragColumnItem.current === null || dragColumnOverItem.current === null)
      return;

    const copyListItems = structuredClone(state);
    const dragItemContent =
      copyListItems[dragColumnItem.current][dragRowItem.current];
    copyListItems[dragColumnItem.current].splice(dragRowItem.current, 1);
    copyListItems[dragColumnOverItem.current].splice(
      dragRowOverItem.current,
      0,
      dragItemContent
    );

    dragRowItem.current = null;
    dragRowOverItem.current = null;
    setState(copyListItems);
    if (onDrop) onDrop(copyListItems);
  };

  return (
    <>
      {Object.entries(state).map(([key, value]) => (
        <ul key={key} className="container">
          {value &&
            value.length &&
            value.map((d: Issue, rowIndex: number) => (
              <li
                className="book"
                key={rowIndex}
                onDragStart={(e) => dragStart(e, key, rowIndex)}
                onDragEnter={(e) => dragEnter(e, key, rowIndex)}
                onDragEnd={handleDrop}
                draggable
              >
                {render(d)}
              </li>
            ))}
          <DndEndItem
            className="book"
            onDragStart={(e) => dragStart(e, key, value.length - 1)}
            onDragEnter={(e) => dragEnter(e, key, value.length - 1)}
            onDragEnd={handleDrop}
          >
            Drag Here
          </DndEndItem>
        </ul>
      ))}
    </>
  );
};

const DndEndItem = styled.li`
  width: 100%;
  padding: 15px 0;
  text-align: center;
  font-weight: bold;
`;

export default Dnd;
