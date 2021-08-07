---
title: Adventures in Ethereum Dapp Development
featuredImage: ./image.jpg
date: 2021-06-08T00:00:00+00:00
featured: true
---

Recently, I wrote ETH Passwords, a password manager, to get familiar with Ethereum development. I had heard many claims about dapps being the future, and I decided to write one to learn how they work.

## Why a password manager?
ETH Passwords is a password manager built on the Ethereum blockchain. I came up with the idea because, around the same time as I was looking for a project to build, LastPass decided to change their free offering, and I was in the market for a new password manager. While I didn't intend to replace LastPass with my homemade password manager, I realized the idea was complex enough to learn many features of Ethereum, while simple enough to implement relatively quickly on a platform I didn't know much about.

## The difference between a dapp and a traditional app
The "D" in dapp stands for decentralized, but what does that mean? It's actually pretty simple.

A traditional app generally has a front end and a back end. The front end is run by the users and handles displaying information. The back end runs on servers controlled by whoever made the app and generally has two main roles: performing operations the user can not be trusted to perform (like authentication) and facilitating communication between clients.

Dapps keep the traditional front end, but use smart contracts to fulfill the role of a traditional back end. Because of how the Ethereum network works (which I won't explain in detail here), the operations in smart contracts are gauranteed to have been executed correctly. Communication between clients is facilitated by commiting data to the Ethereum blockchain, which is globally accessible and available to all clients to view. By using smart contracts, a dapp doesn't have to rely on a central server and is therefore decentralized.

## Picking libraries
There are many libraries to pick from for Ethereum development. Generally different libraries handle developing smart contracts and connecting the front end to smart contracts, but some handle both.

Truffle seems to be the most popular and well established smart contract development and testing library. OpenZeppelin is another common smart contract development and testing library that includes implementations of standards like ERC20 tokens. Hardhat markets itself as a lightweight, flexible, and unopinionated alternative. It seems to be increasing in popularity. All three of these are JavaScript libraries. Brownie is a Python library for smart contract development. It doesn't seem to be nearly as popular as the others.

There are two major players on the client side for web based dapps: Web3 and Ethers. They seem to be pretty similar and their technical differences are more subtle.

I initially tried to use Truffle, but I had some technical issues and couldn't get it to work on my machine, so I used Hardhat. I picked Ethers on the client side. I chose these libraries because of their popularity. As a beginner building a relatively simple project, the availability of material to learn from was a more important consideration than technical details.

## Dapp limitations
I uncovered some limitations while developing my password manager dapp. First, all information stored on the blockchain is publicly accessible. I had initially hoped that there was some way to encrypt the information so that only one user could read it built in to Ethereum, but that doesn't seem to be the case. I instead ended up having to encrypt the information myself and ask the user for a key to use when they opened the app.

Another issue I ran into is gas costs. Gas is used as a way to quantify how computationally expensive an operation on the Ethereum network is. Gas costs are determined by supply and demand. They are especially high for storing data on the blockchain (something ETH Passwords has to do a lot). When executing a method on a smart contract, a user must pay an amount of gas to allow that smart contract to run. The exception to this is `view` and `pure` functions that don't actually make any changes to the blockchain, and therefore can be handled entirely client side.

High gas costs made ETH Passwords unusable as a practical password manager. It was just too expensive to use on a regular basis. Because of this, I never deployed my app on the main Ethereum network. I only deployed it on the Ropsten test network.

## Reflection
Ethereum and dapps in general seem like a great idea on paper, but this exercise really showed me where the problems are. Gas costs are probably the biggest issue. There have been plans to solve the problem of gas costs increasing as the network scales by other cryptocurrencies, Ethereum itself, and "L2" protocols built on top of the Ethereum network. I don't think Dapps can be considered practical until one of these solutions reaches maturity.