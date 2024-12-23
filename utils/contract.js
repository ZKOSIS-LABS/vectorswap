import { ethers } from 'ethers'
import CustomDexABI from '../utils/CustomDex.json'
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
      '0x4F4e508658Aa2f5F55f27F37c54297718a812388',
      CustomDexABI.abi,
      signer,
    )

    return contractReader
  }
}
