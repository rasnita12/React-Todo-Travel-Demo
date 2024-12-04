export default function Stats({ items }) {
  
  if (items.length === 0) return (<p className="stats"><em>Start adding some items to your packing list</em></p>);
  const numItems = items.length;
  const numPacked = items.filter(i => i.packed).length;
  const perPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {perPacked === 100 ? 'You got everything ready! Ready to go!' :
          `You have ${numItems} number of items in the list. You have already packed ${numPacked} (${perPacked}%)`}
      </em>
    </footer>
  );
}
