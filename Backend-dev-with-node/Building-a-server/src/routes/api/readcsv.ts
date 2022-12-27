import express from 'express';
import csv from 'csvtojson'
import { promises as fsPromise } from 'fs'

const reader = express.Router();

const inputFile = '../users.csv';
const outputFile = 'users.json'

reader.get('/', async (req, res) => {
    res.send('...Converting')
    csv()
        .fromFile(inputFile)
        .then((data) => {
            let newData = data.map((item: { first_name: string, last_name: string, phone: string }) => {
                let first = item.first_name
                let last = item.last_name
                let phone = item.phone
                if (item.phone === '') {
                    phone = 'Missing data'
                }
                return { first, last, phone }
            });

            fsPromise.writeFile(outputFile,JSON.stringify(newData))

        })


})

export default reader

