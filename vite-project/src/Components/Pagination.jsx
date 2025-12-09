import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';

const MAX_VISIBLE_PAGES = 5;
const TOTAL_PAGES = 10;

function Pagination_example() {
    const [activePage, setActivePage] = useState(3);

    const createPageItems = () => {
        let items = [];


        let startPage = Math.max(1, activePage - Math.floor(MAX_VISIBLE_PAGES / 2));
        let endPage = Math.min(TOTAL_PAGES, startPage + MAX_VISIBLE_PAGES - 1);

        if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
            startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
        }


        for (let number = startPage; number <= endPage; number++) {
            items.push(
                <Pagination.Item
                    key={number}
                    active={number === activePage}
                    onClick={() => setActivePage(number)}
                >
                    {number}
                </Pagination.Item>,
            );
        }
        return items;
    };

    return (
        <Container className="my-5">
            <h1>Pagination</h1>
            <p className="lead">Active Page : {activePage}</p>

            <Pagination>
                <Pagination.First
                    onClick={() => setActivePage(1)}
                    disabled={activePage === 1}
                />

                <Pagination.Prev
                    onClick={() => setActivePage(Math.max(1, activePage - 1))}
                    disabled={activePage === 1}
                />

                {createPageItems()}

                <Pagination.Next
                    onClick={() => setActivePage(Math.min(TOTAL_PAGES, activePage + 1))}
                    disabled={activePage === TOTAL_PAGES}
                />

                <Pagination.Last
                    onClick={() => setActivePage(TOTAL_PAGES)}
                    disabled={activePage === TOTAL_PAGES}
                />
            </Pagination>


        </Container>
    );
}

export default Pagination_example;