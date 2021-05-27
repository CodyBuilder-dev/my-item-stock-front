import ItemList from './ItemList';

const categories:string[] = [];
for (var i = 0; i <5; ++ i)
    categories.push("카테고리"+i)



function CategoryList() {
    return (
        <div>
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
