import { ethers } from 'ethers'
import MoonBoysSwapABI from '../utils/MoonBoysSwap.json'
import CustomTokenABI from '../utils/CustomToken.json'

export const tokenContract = async address => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(address, CustomTokenABI, signer)

    return contractReader
  }
}

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const { ethereum } = window

  if (ethereum) {
    const signer = provider.getSigner()

    const contractReader = new ethers.Contract(
      '0x7C994468Cd2E3060b92B764ab5004f110951BFED',
      MoonBoysSwapABI.abi,
      signer,
    )

    return contractReader
  }
}
