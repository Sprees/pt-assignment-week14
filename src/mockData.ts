type employee = {
    firstName: string
    lastName: string
    role: string
    id: string
}

type job = {
    customerName: string
    customerPhoneNumber: string
    customerEmail: string
    loadAddressLine1: string
    loadAddressLine2: string | null
    unloadAddressLine1: string
    unloadAddressLine2: string | null
    notes: string | null
    id: string
}

export const jobs: job[] = [
    {
        customerName: "Beth O'Caine",
        customerPhoneNumber: '339-313-2790',
        customerEmail: 'bocaine0@rakuten.co.jp',
        loadAddressLine1: '6 Larry Junction',
        loadAddressLine2: null,
        unloadAddressLine1: '4 Waxwing Center',
        unloadAddressLine2: null,
        notes: 'Aliquam erat volutpat. In congue. Etiam justo.',
        id: 'f5ce2a9d-d528-49b5-b3dc-b1782fb74243',
    },
    {
        customerName: 'Yettie Plait',
        customerPhoneNumber: '905-988-4791',
        customerEmail: 'yplait1@shinystat.com',
        loadAddressLine1: '2906 Arkansas Point',
        loadAddressLine2: null,
        unloadAddressLine1: '7 Lakewood Gardens Lane',
        unloadAddressLine2: null,
        notes: 'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
        id: 'e5889636-0d24-4806-abd2-972f02097559',
    },
    {
        customerName: 'Flinn Barriball',
        customerPhoneNumber: '512-595-6166',
        customerEmail: 'fbarriball2@usa.gov',
        loadAddressLine1: '551 Lakewood Way',
        loadAddressLine2: 'PO Box 63592',
        unloadAddressLine1: '508 Haas Court',
        unloadAddressLine2: null,
        notes: 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        id: '83715859-c2d5-4c9f-87bd-b29704ad66ef',
    },
    {
        customerName: 'Wilona Tiebe',
        customerPhoneNumber: '668-976-1045',
        customerEmail: 'wtiebe3@businessweek.com',
        loadAddressLine1: '78 Bunting Hill',
        loadAddressLine2: null,
        unloadAddressLine1: '0027 Monica Street',
        unloadAddressLine2: null,
        notes: 'Nulla mollis molestie lorem. Quisque ut erat.',
        id: '3e61c528-f62c-4aa7-b6b0-80edf45b1803',
    },
]

export const employees: employee[] = [
    {
        firstName: 'Abbot',
        lastName: 'Noen',
        role: 'lead',
        id: '5a193776-41fd-40e6-aa5d-f5600e5e6979',
    },
    {
        firstName: 'Davidson',
        lastName: 'Newlyn',
        role: 'lead',
        id: '3c2e75ca-f998-4bcc-9cba-33134717370d',
    },
    {
        firstName: 'Reinald',
        lastName: 'Goldby',
        role: 'lead',
        id: '64f2094b-6068-4605-8762-9fd73058c257',
    },
    {
        firstName: 'Mario',
        lastName: 'Greenshields',
        role: 'lead',
        id: 'c8bffac0-701a-4f97-b2ce-2f7e06304168',
    },
    {
        firstName: 'Jule',
        lastName: 'Hacquoil',
        role: 'helper',
        id: '969ccea8-cd05-4028-a9a3-b5d62662ef7a',
    },
    {
        firstName: 'Nero',
        lastName: 'Ruddick',
        role: 'helper',
        id: '6b76b719-ba17-4892-a6db-6acad2242e1b',
    },
    {
        firstName: 'Dani',
        lastName: 'Rumsey',
        role: 'helper',
        id: '42aadbd1-bb32-40f3-a281-3280fc63a00d',
    },
    {
        firstName: 'Fran',
        lastName: 'Nesbit',
        role: 'helper',
        id: '1686a0b6-d8fe-454e-b6a1-105ada61e9aa',
    },
    {
        firstName: 'Benito',
        lastName: 'Eggerton',
        role: 'helper',
        id: '61c0aca4-8535-40a7-a558-0b8f73aa9976',
    },
    {
        firstName: 'Hodge',
        lastName: 'Rudolph',
        role: 'helper',
        id: '8b591874-e3a7-4e11-9ab5-530a9f8559d1',
    },
    {
        firstName: 'Ogdan',
        lastName: 'Demelt',
        role: 'helper',
        id: '2c8552d7-64c5-483e-962a-6b86de6902b9',
    },
    {
        firstName: 'Laurent',
        lastName: 'Rilings',
        role: 'lead',
        id: '40678299-d566-4379-8e4c-0067cdebb5c7',
    },
    {
        firstName: 'Esra',
        lastName: 'Wong',
        role: 'lead',
        id: '15070f9e-0bdf-4eaf-b79c-39de37221daa',
    },
    {
        firstName: 'Bret',
        lastName: 'Hassey',
        role: 'helper',
        id: '71c1fe3a-5528-474d-a63f-858122db9edd',
    },
    {
        firstName: 'Sol',
        lastName: 'Michie',
        role: 'helper',
        id: 'ed869da1-81d1-446b-973f-217bfba19fef',
    },
]
