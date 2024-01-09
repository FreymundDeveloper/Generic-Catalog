// Refatore o código do arquivo de maneira que o código se torne mais limpo, legível e de fácil manutenção.
// Refactor the file's code so that the code becomes cleaner, more readable, and easier to maintain.

class PrimeGenerator {
    static generatePrimes(limit) { // Generate an array of prime numbers according to the established "limit" variable.
        const primes = [];
        let candidate = 2;

        while (primes.length < limit) {
            if (this.isPrime(candidate, primes)) primes.push(candidate);

            candidate++;
        }

        return primes;
    }

    static isPrime(number, primes) { // Validate if a value is Prime.
        for (const prime of primes) {
            if (prime * prime > number) break;
            if (number % prime === 0) return false;
        }

        return true;
    }

    static printPages(primes, rowsPerPage, columnsPerPage) { // Structuring the console return pattern.
        let pageNumber = 1;

        for (let pageOffset = 0; pageOffset < primes.length; pageOffset += rowsPerPage * columnsPerPage) {
            console.log(`Page ${pageNumber++}`);

            for (let rowOffset = pageOffset; rowOffset < pageOffset + rowsPerPage; rowOffset++) {
                const rowPrimes = Array.from({ length: columnsPerPage }, (_, column) => primes[rowOffset + column * rowsPerPage]);

                console.log(rowPrimes.join('|'));
            }
        }
    }

    static main = () => { // Defining initial values ​​and initializing the algorithm.
        const numberOfPrimes = 1000;
        const rowsPerPage = 50;
        const columnsPerPage = 4;

        const primes = this.generatePrimes(numberOfPrimes);
        this.printPages(primes, rowsPerPage, columnsPerPage);
    }
}

PrimeGenerator.main(); // Running in cd ./Challenger/Questions/Question3 - node questionThree.js