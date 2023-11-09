export const ItemDetail = ({item}) =>{
    return (
    <>
    <h1>{item.title}</h1>
    <img src={item.pictureUrl} />
    <div>
        <p>{item.description}</p>
        <p>precio: {item.price} u$d</p>
    </div>
    </>)
}
