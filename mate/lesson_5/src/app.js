import dotenv from 'dotenv';
import minimist from 'minimist';

dotenv.config();

console.log(minimist(process.argv.slice(2)));
