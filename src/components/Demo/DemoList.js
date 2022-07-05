import {useState, useMemo} from 'react';

const DemoList = () => {
  const [listItems, setListItems] = useState([5, 3, 1, 10, 9]);

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return listItems.sort((a, b) => a - b);
  }, [listItems]);

  console.log('DEMOLIST RUNNING');

  return (
    <div>{sortedList.map(item => (
      <li key={item}>{item}</li>
    ))}</div>
  );
};

export default DemoList;