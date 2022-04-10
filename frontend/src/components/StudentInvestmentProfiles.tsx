import { useEffect, useState } from 'react'
import Student from './Student'
function StudentInvestmentProfiles(){
    const [students, updateStudents] = useState([]);
    useEffect(() => {
        async function getStudents(){
            let res = await fetch('http://localhost:8000/api');
            let resJson = await res.json();
            
            updateStudents(resJson.students);
        }
        getStudents();
    }, []);

    return (
        <div>
            {students.map((e: any) => {
            
            return <Student private_key={e.private_key} description={e.description} name={`${e.first_name} ${e.last_name}`} eth_wallet_address={e.eth_wallet_address} />
            
            })}
        </div>
    );
}

export default StudentInvestmentProfiles;