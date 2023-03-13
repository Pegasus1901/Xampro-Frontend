import './table.css';


const Table = ({ data, column }) => {


    return (
        <>
            <table key={data}>
                <thead key={data}>
                    <tr key={data}>
                        {column.map((item, index) => <TableHeadItem item={item} />)}
                    </tr>
                </thead>
                <tbody key={data}>
                    {data.map((item, index) => <TableRow item={item} column={column} />)}
                </tbody>
            </table>
        </>
    )
}
const TableHeadItem = ({ item }) => <th key={item}>{item.heading}</th>
const TableRow = ({ item, column }) => {
    return <tr key={item}>

        {column.map((columnItem, index) => {
            if (columnItem.value.includes('.')) {
                const splitItem = columnItem.value.split('.') //['address', 'city']
                return <td>{item[splitItem[0]][splitItem[1]]}</td>
            }
            return <td>{item[`${columnItem.value}`]}</td>
        })}
    </tr>
}


// if error or warning remove all keys in the document
export default Table