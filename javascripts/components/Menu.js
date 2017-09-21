import React from 'react';
import data from '../data';
import objectMap from 'just-map-object';

var categoriesArr = [];

objectMap(data, (categoryName, fns) => {
  var fnsArr = [];
  objectMap(fns, fn => {
    fnsArr.push(fn);
  });
  categoriesArr.push({name: categoryName, fns: fnsArr});
})

export default ({selected, onSelect}) => {
  return (
    <section style={{flex: 2}} className="main-content left-col">
      <ul key={'u1-x-' + 0}>
      {categoriesArr.map((category, i) => (
        <div>
          <li key={'li-x-' + i} style={{listStyle: 'none'}}>{category.name}</li>
          <ul key={'ul-y-' + i}>
          {category.fns.map((fn, j) => {
            const className = (fn == selected) ? 'link selected' : 'link';
            return (
              <li key={j} className={className} style={{listStyle: 'none'}} onClick={onSelect}>{fn}</li>
            );
          })}
          </ul>
        </div>
      ))}
      </ul>
    </section>
  );
}
