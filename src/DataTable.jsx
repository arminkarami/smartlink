/*
import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // وارد کردن تنظیمات Firebase

function DataTable() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        // درخواست داده‌ها از Firebase
        const fetchData = async () => {
            const data = [];
            const snapshot = await db.collection('your_collection_name').get();
            snapshot.forEach((doc) => {
                data.push(doc.data());
            });
            setTableData(data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>عنوان 1</th>
                    <th>عنوان 2</th>
                    <th>عنوان 3</th>
                    {/!* ویژگان جدول را اضافه کنید *!/}
                </tr>
                </thead>
                <tbody>
                {tableData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.field1}</td>
                        <td>{item.field2}</td>
                        <td>{item.field3}</td>
                        {/!* مقادیر داده‌ها را از آبجکت item خوانده و نمایش دهید *!/}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
*/
