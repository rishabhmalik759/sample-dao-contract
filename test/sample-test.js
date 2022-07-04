const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dao", function async () {
  it("Should return the new greeting once it's changed", async function () {
    const Dao = await ethers.getContractFactory("Dao");
    const dao = await Dao.deploy();
    await dao.deployed();
    const address = dao.address;
    console.log(address);
    try{
      const balance = await dao.checkBalanceOf(address);
      console.log(balance);

    }catch(err){
      console.log(err);
    }
    // console.log(await dao.createProposal("something", []));
    
    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
