function countDown(n) {
    console.log(n);

    if (n <= 0) {
        return;
    }

    return countDown(n - 1);
}

countDown(5);