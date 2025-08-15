const Saude = () => {
return(
    <div
        style={{border: 1, cellPadding: 10, cellSpacing: 0, align: 'center', width: '90%'}}>
        <tr>
            <th 
                style={{colspan: 3, align: 'center'}}>
                Profissionais da Saúde
            </th>
        </tr>
        <tr
        style={{align: 'center'}}>
            <td 
            style={{backgroundColor: '#f3eaff'}}>
                José da Silva
            </td>
            <td
            style={{backgroundColor: '#f3eaff'}}>
                Maria da Silva
            </td>
             <td
            style={{backgroundColor: '#f3eaff'}}>
                Jaqueline Mendes
            </td>
        </tr>
    </div>
)
}
export default Saude