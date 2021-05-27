import ItemList from './ItemList';

const categories:string[] = [];
for (var i = 1; i <6; ++i)
    categories.push("카테고리"+i)

const printCurrentPosition = function() {
    console.log(window.scrollY);
}

function CategoryList() {
    return (
        <div id="category-list" onScroll={printCurrentPosition}>
            <ul>
                {categories.map(category =>  (
                        <li>
                            <h1>{category}</h1>
                            <ItemList />
                       </li>
                    )
                )}
            </ul>
        </div>
    )
}
export default CategoryList;
