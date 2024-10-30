import { useState } from "react"
import Aplayers from "./components/Aplayers/Aplayers"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Splayers from "./components/Splayers/Splayers"
import NewsLatter from "./components/NewsLatter"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [coinAmount, setCoinAmount] = useState(0);
  const [choosePlayers, setChoosePlayers] = useState([]);

 
  // handel delete button
  const handelDelete = id => {
    const deletePlayer = choosePlayers.filter(player => player.id !== id)
    setChoosePlayers(deletePlayer);
    toast.warn('Player is removed')

  }

  // Choose players handel
  const handelChoose = player => {
    if(coinAmount < player.price){
      toast.error('Not enough money to buy this player Claim some Credit')
      return 
  }
  if(choosePlayers.length >= 6){
    toast.warn('Player is already 6')
  }
  else{
    const isExist = choosePlayers.find(
      previousPlayer => previousPlayer.id === player.id
    )
    if(!isExist){
      toast.success(`Congrates !! ${player.name} is now in your squad`)
      const decreaseCoin = document.getElementById('coin-amount');
        const newCoinAmount = Number(decreaseCoin.innerText) - player.price;
        decreaseCoin.innerText = newCoinAmount;
        const newPlayer = [...choosePlayers, player];
      setChoosePlayers(newPlayer);
      }
      else{
        toast.error('Player already selected');
      }
  }


}
  const [isActive, setIsActive] = useState({player: true, status: 'Available' })

  // players handel
  const handelIsActive = status => {
    if(status == "Available"){
      const addMore = document.getElementById('add-more');
      addMore.classList.add('hidden')
      setIsActive({player: true, status: 'Available'})
    }
    else{
      setIsActive({player: false, status: 'Selected'})
      const addMore = document.getElementById('add-more');
      addMore.classList.remove('hidden')
    }
  }
  
  // add player handel
  const addPlayer = () => {
    setIsActive({player: true, status: 'Available'})
      const selectedPlayers = document.getElementById('selected-players');
    selectedPlayers.classList.add('hidden');
    const availablePlayers = document.getElementById('available-players');
    availablePlayers.classList.remove('hidden');
  }

  // coin handel 
  const handelCoin = coin => {
    toast.success('Claim the coin')
    setCoinAmount(coinAmount + coin)
  }

  return (
    <>
      
      <Navbar coinAmount={coinAmount}
      ></Navbar>

      <Banner handelCoin={handelCoin}></Banner>
      <Aplayers 
      isActive={isActive}
      handelChoose={handelChoose}
      handelIsActive={handelIsActive}
      choosePlayers={choosePlayers}
      ></Aplayers>

      <Splayers
      isActive={isActive}
      choosePlayers={choosePlayers}
      handelDelete={handelDelete}
      addPlayer={addPlayer}
      ></Splayers>
      
      <NewsLatter></NewsLatter>
      <Footer></Footer>
     
      <ToastContainer position="top-center" />
    </>
  )
}

export default App
