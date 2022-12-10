import './table.css';


const Table = ({ data, column }) => {


    return (
        <>
            <table>
                <thead>
                    <tr>
                        {column.map((item, index) => <TableHeadItem item={item} />)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => <TableRow item={item} column={column} />)}
                </tbody>
            </table>
        </>
    )
}
const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => {
    return <tr>

        {column.map((columnItem, index) => {
            if (columnItem.value.includes('.')) {
                const splitItem = columnItem.value.split('.') //['address', 'city']
                return <td>{item[splitItem[0]][splitItem[1]]}</td>
            }
            return <td>{item[`${columnItem.value}`]}</td>
        })}
    </tr>
}

export default Table