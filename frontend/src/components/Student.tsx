import { useState } from 'react'
import { Button } from 'antd';
import { WalletOutlined } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;

function Student(props: any){
    const [isPaying, updateStatus] = useState(false);
    const [ethAddress, updateAddress] = useState('');
    const [amount, updateAmount] = useState(0);
    const [key, updateKey] = useState('');
    const [url, updateUrl] = useState('https://kovan.infura.io/v3/e65c23a9d95d4d78bd30120b9b0eab1c');

    function pay(){
        async function makeTransaction(){
            let sent = JSON.parse(localStorage.getItem('eth_wallet_address') as string);
            if(!sent) sent = ethAddress;
            let key1 = JSON.parse(localStorage.getItem('private_key') as string);
            if(!key1) key1 = key;
            console.log(props.private_key);
            let json = {
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    sending_address: sent,
                    recieving_address: props.eth_wallet_address,
                    sending_key: key1,
                    recieving_key: props.private_key,
                    amount: amount,
                    url: url
                }) 
            };

            console.log(json['body']);
            let res = await fetch('http://localhost:8000/pay', json);
            let jso = await res.json();
            console.log(jso);
            if(jso.message != 'success!'){
                alert('Something went wrong. Please try again.');
                return;
            }
        }
        makeTransaction();
    }
    return (
        <div style={{}}>
            
            {!isPaying ? (
            <div style={{marginBottom: 50}}>
                <Card
                    hoverable
                    style={{
                    width: 300,
                    height: 200,
                    margin: "50px",
                    borderRadius: "20px",
                    overflow: "hidden"
                    }}
                    onClick={() => updateStatus(true)}
                >
                    <h1><strong>{props.name}</strong></h1>
                    <p>{props.description}</p>
                    <Button type="primary" shape="round" onClick={() => updateStatus(true)} icon={<WalletOutlined />} size={'large'}>
                        Invest
                    </Button>
                </Card>
                
            </div>) : (
            <div>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                </div>
                    <input type="text" placeholder='Ethereum Address' onChange={(e) => updateAddress(e.target.value)} />
                    <input type="text" placeholder='Private Key' onChange={(e) => updateKey(e.target.value)} />
                    <input type="text" placeholder='Amount' onChange={(e) => updateAmount(Number(e.target.value))} />
                    <select name="url" onChange={(e) => {updateUrl(e.target.value)}}>
                        <option value="https://kovan.infura.io/v3/e65c23a9d95d4d78bd30120b9b0eab1c">Kovan</option>
                        <option value="https://mainnet.infura.io/v3/e65c23a9d95d4d78bd30120b9b0eab1c">Mainnet</option>
                    </select>
                    {/* <button onClick={pay}>Invest</button> */}
                    <Button type="primary" shape="round" onClick={pay} icon={<WalletOutlined />} size={'large'}>
                        Invest
                    </Button>
            </div>
            )}
        </div>
    );
}
export default Student;