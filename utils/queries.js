import { BigNumber, ethers } from 'ethers'
import { contract, tokenContract } from './contract'
import { toEth } from './ether-utils'

export async function swapVsgToToken(tokenName, amount) {
  try {
    let tx = { value: toWei(amount) }

    const contractObj = await contract()
    const data = await contractObj.swapVsgToToken(tokenName, tx)

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)
    const data = await tokenContractObj.allowance(
      owner,
      '0x7C994468Cd2E3060b92B764ab5004f110951BFED',
    )

    const result = BigNumber.from(data.toString()).gte(
      BigNumber.from(toWei(amount)),
    )

    return result
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function swapTokenToVsg(tokenName, amount) {
  try {
    // Check the user's allowance for the token first
    const owner = await getOwnerAddress();  // Get the user's wallet address
    const hasAllowance = await hasValidAllowance(owner, tokenName, amount);

    if (!hasAllowance) {
      // If allowance is insufficient, increase it
      await increaseAllowance(tokenName, amount);
    }

    // Now, proceed with the swap
    const contractObj = await contract();
    const data = await contractObj.swapTokenToVsg(
      tokenName,
      amount,  // Ensure the amount is in the right units
    );

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToToken(srcToken, destToken, amount) {
  try {
    const contractObj = await contract()
    const data = await contractObj.swapTokenToToken(
      srcToken,
      destToken,
      amount,
    )

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function getTokenBalance(tokenName, address) {
  try {
    const contractObj = await contract()
    const balance = await contractObj.getBalance(tokenName, address)
    return balance
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function getTokenAddress(tokenName) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)
    return address
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function increaseAllowance(tokenName, amount) {
  try {
    const contractObj = await contract()
    const address = await contractObj.getTokenAddress(tokenName)

    const tokenContractObj = await tokenContract(address)
    const data = await tokenContractObj.approve(
      '0x7C994468Cd2E3060b92B764ab5004f110951BFED',
      (amount),
    )

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString())
  return toWei.toString()
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e))
  return json?.reason || json?.error?.message
}
