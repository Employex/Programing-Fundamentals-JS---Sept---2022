function christmasTree(count) {
    for (let i = 0; i <= count; i++) {
        let stars = '*'.repeat(i)
        let space = ' '.repeat(count - i)
        let body = '|'
        console.log(space + stars+ body + stars + space);

    }
}
christmasTree(10)