'use client';

import React, {useState} from 'react';
import { mockData } from '@/assets/mockdata';

export default function Overview() {
    const [data, setData] = useState<typeof mockData | []>([]);
    return (
        <div className="text-white text-2xl">

        </div>
    );
}