// data.js - Dados completos do Dashboard Executivo Soller Group
// Última atualização: 21 de Julho de 2025

// Declaração única do objeto SollerData com TODOS os dados
const SollerData = {
    // Metadados e configurações
    metadata: {
        lastUpdate: '2025-07-21',
        currentDate: new Date('2025-07-21'),
        dataSource: 'Análise completa de dados até Julho/2025'
    },

    // Links para fontes de dados
    dataSources: {
        aggregatedData: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/Eb3i8mhVbwdImMwhfGrSZWoBi2u1iF9h3FXBcU26Idx6gw?e=KtrLG0",
        averageTicket: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/ETip6UxX0TZNmFTly12zXoIBChKrL7ZGv65ulb9-MJ01ew?e=vSzbFO",
        ticketMedio: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/Ea116t3n9PxJmUbAw6S0eZwBjZAKvp4Ts3rWVNLeuSVtFw?e=7HblNN",
        churnAnalysis: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/EW5cDcJhC_1Drq8Z4v9uijUBFfcLbO6xVqtNme9aTyjw8A?e=rFSdgV",
        cicloVenda: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/EWMP6uVnr9tCnmrcMO9MxncBnb_I_5qeT5sHTyOpgyH0Vw?e=bVAwgV",
        contratosFormalizados: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/Eec3hRJVV-JDpFDOgtifXBABUQVn2veUw_48Bx_vO6cUHg?e=A28jVw",
        crescimentoGMV: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/ERjMVRJ3rstGpxxn0NSs6wgBoIBIsf0wPCJRrzVnbVc7oA?e=m2hJKk",
        firstDeal: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/EYtRzplFYodAjf8wjvykoUABVyHVKPY-Ie6zEH9sHTwX5w?e=q8QMII",
        margemAgencia: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/ET7i5VUpQEFFkcrBlC7T36YBO1Y_KJkS4RXeue43f-s8MQ?e=aEjOvd",
        topNichos: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/ER7PAFpnOgNLnKgb8lY4rsoB-mBZqp7ud44rUTjGxdAC5Q?e=CIDgE1",
        top61Influencers: "https://isabelasoller-my.sharepoint.com/:x:/g/personal/bruno_figueiredo_gruposoller_com_br/EU4Mbp6c5fFItb90HUpN1FoBhvRkIuof-7nzfxEohPTCbQ?e=ncweQS"
    },

    // KPIs Principais
    kpis: {
        churnRate: {
            value: 74.9,
            period: '12 meses',
            details: '679 de 906 marcas',
            trend: 'down',
            status: 'critical'
        },
        churnRate3Months: {
            value: 70.9,
            period: '3 meses',
            details: '249 de 351 marcas'
        },
        acquisitionRate: {
            current: 17,
            peak2023: 61,
            decline: -72,
            unit: 'empresas/mês',
            trend: 'down',
            status: 'warning'
        },
        averageMargin: {
            value: 23,
            withoutAgency: 25,
            withAgency: 13,
            difference: 48,
            unit: '%',
            trend: 'stable',
            status: 'success'
        },
        concentration: {
            top61: 89.06,
            revenue: 6465157,
            totalInfluencers: 305,
            trend: 'risk',
            status: 'info'
        }
    },

    // GMV Histórico
    gmv: {
        total: 52072945.44,
        averageTicket: 17888.34,
        totalTrades: 2911,
        paymentDistribution: {
            cash: 66.9,
            installments: 33.1
        },
        labels: [
            '2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06',
            '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12',
            '2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06',
            '2024-07', '2024-08', '2024-09', '2024-10', '2024-11', '2024-12',
            '2025-01', '2025-02', '2025-03', '2025-04', '2025-05', '2025-06',
            '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12'
        ],
        values: [
            // 2023
            200000, 300000, 1200000, 2100000, 1800000, 1300000,
            1400000, 1600000, 1400000, 800000, 1200000, 2400000,
            // 2024
            1100000, 1100000, 1100000, 1600000, 1600000, 1700000,
            1600000, 1900000, 1500000, 2000000, 2000000, 2300000,
            // 2025 (dados reais até julho, projeções depois)
            2300000, 2600000, 2400000, 2300000, 2500000, 3300000,
            2800000, 2900000, 3000000, 3100000, 3200000, 3300000
        ],
        monthly: {
            // 2023
            '2023-01': { value: 200000, trades: 4, ticket: 20000 },
            '2023-02': { value: 300000, trades: 10, ticket: 12000 },
            '2023-03': { value: 1200000, trades: 25, ticket: 15200 },
            '2023-04': { value: 2100000, trades: 30, ticket: 14000 },
            '2023-05': { value: 1800000, trades: 35, ticket: 12857 },
            '2023-06': { value: 1300000, trades: 40, ticket: 13000 },
            '2023-07': { value: 1400000, trades: 42, ticket: 13095 },
            '2023-08': { value: 1600000, trades: 38, ticket: 13947 },
            '2023-09': { value: 1400000, trades: 35, ticket: 14000 },
            '2023-10': { value: 800000, trades: 36, ticket: 14167 },
            '2023-11': { value: 1200000, trades: 34, ticket: 14118 },
            '2023-12': { value: 2400000, trades: 32, ticket: 14063 },
            // 2024
            '2024-01': { value: 1100000, trades: 35, ticket: 14857 },
            '2024-02': { value: 1100000, trades: 33, ticket: 14848 },
            '2024-03': { value: 1100000, trades: 37, ticket: 14865 },
            '2024-04': { value: 1600000, trades: 38, ticket: 15263 },
            '2024-05': { value: 1600000, trades: 35, ticket: 15143 },
            '2024-06': { value: 1700000, trades: 36, ticket: 15000 },
            '2024-07': { value: 1600000, trades: 37, ticket: 15135 },
            '2024-08': { value: 1900000, trades: 39, ticket: 15128 },
            '2024-09': { value: 1500000, trades: 36, ticket: 15278 },
            '2024-10': { value: 2000000, trades: 42, ticket: 16190 },
            '2024-11': { value: 2000000, trades: 40, ticket: 15500 },
            '2024-12': { value: 2300000, trades: 38, ticket: 15526 },
            // 2025 (até julho)
            '2025-01': { value: 2300000, trades: 35, ticket: 16571 },
            '2025-02': { value: 2600000, trades: 37, ticket: 16757 },
            '2025-03': { value: 2400000, trades: 38, ticket: 17105 },
            '2025-04': { value: 2300000, trades: 40, ticket: 17000 },
            '2025-05': { value: 2500000, trades: 42, ticket: 17143 },
            '2025-06': { value: 3300000, trades: 44, ticket: 17045 },
            '2025-07': { value: 2800000, trades: 41, ticket: 17073 }
        }
    },

    // Contratos Formalizados
    contracts: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        data: {
            2023: [0, 0, 0, 77, 120, 97, 75, 88, 69, 73, 71, 37],
            2024: [27, 41, 55, 66, 58, 54, 62, 70, 71, 96, 76, 73],
            2025: [48, 54, 57, 87, 100, 74, 85, null, null, null, null, null]
        },
        monthly: {
            // 2023
            '2023-01': 27, '2023-02': 41, '2023-03': 55, '2023-04': 66, '2023-05': 58, '2023-06': 97,
            '2023-07': 75, '2023-08': 88, '2023-09': 69, '2023-10': 73, '2023-11': 71, '2023-12': 37,
            // 2024
            '2024-01': 27, '2024-02': 41, '2024-03': 55, '2024-04': 66, '2024-05': 58, '2024-06': 54,
            '2024-07': 62, '2024-08': 70, '2024-09': 71, '2024-10': 96, '2024-11': 76, '2024-12': 73,
            // 2025
            '2025-01': 48, '2025-02': 54, '2025-03': 57, '2025-04': 87, '2025-05': 100, '2025-06': 74,
            '2025-07': 85
        },
        averages: {
            2023: 78.5,
            2024: 62.4,
            2025: 72.1
        }
    },

    // Origem dos Leads
    leadSource: {
        distribution: {
            inbound: { percentage: 52, count: 2012 },
            outbound: { percentage: 48, count: 1874 }
        },
        byCoordinator: {
            'Paula': { inbound: 52, outbound: 48, total: 1033 },
            'Ana Brito': { inbound: 61, outbound: 39, total: 821 },
            'Kath': { inbound: 58, outbound: 42, total: 634 },
            'Rebecca': { inbound: 37, outbound: 63, total: 423 }
        },
        strategy: {
            inbound: {
                strengths: ['Liderando conversões'],
                weaknesses: [
                    'Sem blog ativo',
                    'Sem newsletter estruturada',
                    'Website com tráfego baixo',
                    'Sem cases indexados'
                ]
            },
            outbound: {
                strengths: ['48% do pipeline'],
                weaknesses: [
                    'Sem cadências automatizadas',
                    'Sem ABM estruturado',
                    'Personalização manual',
                    'RD Station em implementação'
                ]
            }
        }
    },

    // Margens e Performance
    margins: {
        average: 23,
        byType: {
            withoutAgency: 25,
            withAgency: 13
        },
        topInfluencers: [
            { name: 'Carol Leite', margin: 30.0, thirdParty: 0, status: 'optimal' },
            { name: 'Saide Mattar', margin: 28.5, thirdParty: 0, status: 'optimal' },
            { name: 'Gabriela Morais', margin: 21.4, thirdParty: 0, status: 'good' },
            { name: 'Camila Monteiro', margin: 20.9, thirdParty: 0, status: 'good' },
            { name: 'Petala Barreiros', margin: 20.4, thirdParty: 0, status: 'good' },
            { name: 'Marcello Novaes', margin: 20.0, thirdParty: 16.0, status: 'review' },
            { name: 'Bruna Cardoso', margin: 10.0, thirdParty: 10.0, status: 'critical' }
        ],
        byAgency: [
            { name: 'Canal A', negotiations: 39, avgMargin: 15.4, status: 'critical' },
            { name: 'BR MEDIA', negotiations: 25, avgMargin: 18.0, status: 'review' },
            { name: 'AGENCIA PAR', negotiations: 18, avgMargin: 9.8, status: 'critical' },
            { name: 'AGÊNCIA AMAR', negotiations: 15, avgMargin: 11.2, status: 'critical' },
            { name: 'MALU BORGES', negotiations: 12, avgMargin: 13.5, status: 'critical' }
        ]
    },

    // Dados das agências do Excel
    agencies: [
        { name: "Canal A", contracts: 42, avgMargin: 9.93 },
        { name: "4 PILLARS", contracts: 1, avgMargin: 0 },
        { name: "Africa", contracts: 3, avgMargin: 0 },
        { name: "Pop", contracts: 30, avgMargin: 10.57 },
        { name: "AGENCIA LOI", contracts: 1, avgMargin: 0 },
        { name: "AGENCIA PAR", contracts: 18, avgMargin: 10.56 },
        { name: "SOMA", contracts: 6, avgMargin: 6.17 },
        { name: "AGENICA AFRICA", contracts: 1, avgMargin: 0 },
        { name: "AIR", contracts: 1, avgMargin: 0 },
        { name: "AIR STRIP", contracts: 1, avgMargin: 0 },
        { name: "AIRFLUENCERS", contracts: 4, avgMargin: 0 },
        { name: "AIRSTRIP", contracts: 1, avgMargin: 0 },
        { name: "Coolab", contracts: 5, avgMargin: 5.20 },
        { name: "Banca Digital", contracts: 1, avgMargin: 0 },
        { name: "Marina Carneiro", contracts: 4, avgMargin: 7.50 },
        { name: "BASE", contracts: 1, avgMargin: 0 },
        { name: "BCW", contracts: 1, avgMargin: 0 },
        { name: "BCW GLOBAL", contracts: 1, avgMargin: 0 },
        { name: "BM NEG DIGITAIS", contracts: 3, avgMargin: 0 },
        { name: "BORA", contracts: 1, avgMargin: 0 },
        { name: "BORA ASSESSORIA", contracts: 2, avgMargin: 0 },
        { name: "Bora Assessoria Digital", contracts: 1, avgMargin: 0 },
        { name: "BR INFLUENCIADORES", contracts: 1, avgMargin: 0 },
        { name: "BR MEDIA", contracts: 23, avgMargin: 0 },
        { name: "MFIELD", contracts: 4, avgMargin: 2.75 },
        { name: "BW DIGITAL", contracts: 1, avgMargin: 0 },
        { name: "B-YOUNG", contracts: 1, avgMargin: 0 },
        { name: "MOOD MKT", contracts: 4, avgMargin: 7.50 },
        { name: "3C", contracts: 3, avgMargin: 10.00 },
        { name: "highfy", contracts: 3, avgMargin: 5.33 },
        { name: "Cara de Conteúdo", contracts: 1, avgMargin: 0 },
        { name: "CONECTADA", contracts: 1, avgMargin: 0 },
        { name: "LUCIANA BORTMAN", contracts: 3, avgMargin: 12.67 },
        { name: "Par", contracts: 3, avgMargin: 10.00 },
        { name: "SUPERSONICA", contracts: 3, avgMargin: 16.67 },
        { name: "DENY", contracts: 1, avgMargin: 0 },
        { name: "Trópix", contracts: 3, avgMargin: 6.67 },
        { name: "MOODMKT", contracts: 2, avgMargin: 5.00 },
        { name: "DM9", contracts: 1, avgMargin: 0 },
        { name: "DOJO", contracts: 2, avgMargin: 0 },
        { name: "Dojo Creators", contracts: 1, avgMargin: 0 },
        { name: "DPBranding", contracts: 1, avgMargin: 0 },
        { name: "Phygital", contracts: 2, avgMargin: 10.00 },
        { name: "ROBERTA", contracts: 2, avgMargin: 10.00 },
        { name: "FAROL", contracts: 1, avgMargin: 0 },
        { name: "FERNANDA RIBAS MANAGEMENTS", contracts: 1, avgMargin: 0 },
        { name: "FHISTS", contracts: 1, avgMargin: 0 },
        { name: "Fhits", contracts: 8, avgMargin: 0 },
        { name: "Fizz", contracts: 1, avgMargin: 0 },
        { name: "Fri.to", contracts: 2, avgMargin: 0 },
        { name: "FSB PUBLICIDADE", contracts: 1, avgMargin: 0 },
        { name: "GALERIA", contracts: 1, avgMargin: 0 },
        { name: "GLOBO", contracts: 1, avgMargin: 0 },
        { name: "Grapa", contracts: 3, avgMargin: 0 },
        { name: "GRAPA DIGITAL", contracts: 1, avgMargin: 0 },
        { name: "Gravity Road", contracts: 1, avgMargin: 0 },
        { name: "GRUPO INPRESS", contracts: 1, avgMargin: 0 },
        { name: "GRUPO RAI", contracts: 1, avgMargin: 0 },
        { name: "SOOUL MEDIA", contracts: 2, avgMargin: 16.00 },
        { name: "HINOVA", contracts: 1, avgMargin: 0 },
        { name: "IDEAL", contracts: 1, avgMargin: 0 },
        { name: "VERO", contracts: 2, avgMargin: 22.00 },
        { name: "Influ", contracts: 1, avgMargin: 0 },
        { name: "INFLUU", contracts: 3, avgMargin: 0 },
        { name: "Innocean", contracts: 1, avgMargin: 0 },
        { name: "INTERTALENT", contracts: 1, avgMargin: 0 },
        { name: "IWM DIGITAL", contracts: 1, avgMargin: 0 },
        { name: "JOTACOM", contracts: 1, avgMargin: 0 },
        { name: "JUICY", contracts: 1, avgMargin: 0 },
        { name: "JUICY TEC", contracts: 5, avgMargin: 0 },
        { name: "KAIZEN", contracts: 1, avgMargin: 0 },
        { name: "KATCHUM", contracts: 1, avgMargin: 0 },
        { name: "KETCHUM", contracts: 3, avgMargin: 0 },
        { name: "LOI", contracts: 3, avgMargin: 0 },
        { name: "LTK", contracts: 1, avgMargin: 0 },
        { name: "AGENCIA FH", contracts: 1, avgMargin: 19.00 },
        { name: "Agência Par", contracts: 1, avgMargin: 10.00 },
        { name: "Members", contracts: 1, avgMargin: 0 },
        { name: "ANMA", contracts: 1, avgMargin: 10.00 },
        { name: "BARBARA", contracts: 1, avgMargin: 10.00 },
        { name: "MIS", contracts: 1, avgMargin: 0 },
        { name: "MIS INFLUENCIA", contracts: 1, avgMargin: 0 },
        { name: "BT ARTS", contracts: 1, avgMargin: 16.00 },
        { name: "CANAL A ", contracts: 1, avgMargin: 10.00 },
        { name: "CANAL A /HIGHFY", contracts: 1, avgMargin: 10.00 },
        { name: "MULTIFATO", contracts: 2, avgMargin: 0 },
        { name: "Mutato", contracts: 1, avgMargin: 0 },
        { name: "MYND", contracts: 6, avgMargin: 0 },
        { name: "creators", contracts: 1, avgMargin: 15.00 },
        { name: "NETCOS", contracts: 1, avgMargin: 0 },
        { name: "NXT STEP", contracts: 1, avgMargin: 0 },
        { name: "DAY", contracts: 1, avgMargin: 10.00 },
        { name: "DENY PERES", contracts: 1, avgMargin: 20.00 },
        { name: "Play9", contracts: 1, avgMargin: 0 },
        { name: "DIGITAL SOCIAL BR", contracts: 1, avgMargin: 20.00 },
        { name: "DUOAG", contracts: 1, avgMargin: 10.00 },
        { name: "PUBLIKA", contracts: 1, avgMargin: 0 },
        { name: "Publination", contracts: 13, avgMargin: 0 },
        { name: "RewardStyle Midia Digital", contracts: 1, avgMargin: 0 },
        { name: "EM2", contracts: 1, avgMargin: 16.00 },
        { name: "Scope", contracts: 4, avgMargin: 0 },
        { name: "INDEX", contracts: 1, avgMargin: 17.00 },
        { name: "SNACK", contracts: 1, avgMargin: 0 },
        { name: "SOCIAL TAILORS", contracts: 3, avgMargin: 0 },
        { name: "Social Taylors", contracts: 1, avgMargin: 0 },
        { name: "SOCIALTAILORS", contracts: 2, avgMargin: 0 },
        { name: "SOKO", contracts: 1, avgMargin: 0 },
        { name: "SOLLER", contracts: 1, avgMargin: 0 },
        { name: "MESS", contracts: 1, avgMargin: 20.00 },
        { name: "MOOD MARKETING", contracts: 1, avgMargin: 10.00 },
        { name: "Spark", contracts: 8, avgMargin: 0 },
        { name: "SPARKINC", contracts: 2, avgMargin: 0 },
        { name: "SQUID", contracts: 12, avgMargin: 0 },
        { name: "Suba", contracts: 8, avgMargin: 0 },
        { name: "MZ CREATORS", contracts: 1, avgMargin: 10.00 },
        { name: "TAKE1", contracts: 2, avgMargin: 0 },
        { name: "TEIA", contracts: 1, avgMargin: 0 },
        { name: "THE BUZZ NOW", contracts: 1, avgMargin: 0 },
        { name: "The Insiders Brasil", contracts: 1, avgMargin: 0 },
        { name: "PopComm", contracts: 1, avgMargin: 10.00 },
        { name: "TK1", contracts: 2, avgMargin: 0 },
        { name: "TMKRS", contracts: 1, avgMargin: 0 },
        { name: "SIADE", contracts: 1, avgMargin: 20.00 },
        { name: "Tise", contracts: 1, avgMargin: 10.00 },
        { name: "UNILEVER", contracts: 1, avgMargin: 0 },
        { name: "TWO", contracts: 1, avgMargin: 16.00 },
        { name: "VIBEZZ", contracts: 1, avgMargin: 0 },
        { name: "WAKE", contracts: 1, avgMargin: 0 },
        { name: "WAY STAR", contracts: 1, avgMargin: 16.00 }
    ],

    // Top Performers
    topPerformers: {
        brands: [
            { name: 'AC BRAZIL', revenue: 487219 },
            { name: 'CIF', revenue: 199314 },
            { name: 'IWS', revenue: 194176 },
            { name: 'SUPERCOFFEE', revenue: 170000 },
            { name: 'GARDEN', revenue: 150000 }
        ],
        influencers: [
            { name: 'Aline Marquez', works: 144, revenue: 485000 },
            { name: 'Marcia Fernandes', works: 133, revenue: 442000 },
            { name: 'Gaby Santos', works: 85, revenue: 380000 },
            { name: 'Fabiana Xavier', works: 77, revenue: 295000 },
            { name: 'Luisa Mell', works: 72, revenue: 280000 }
        ]
    },

    // Nichos e Segmentos
    niches: {
        quarterly: {
            quarters: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'],
  data: {
    moda:        [  89596.00, 144193.60, 113029.00, 140578.03, 189620.00, 168066.00 ],
    saude:       [  22840.00, 101000.00,  40990.00, 111650.00, 174940.00, 152300.00 ],
    beleza:      [ 138099.99,  29514.00,  30770.00,  45232.05,  68151.53,  80800.00 ],
    acessorios:  [  49750.10, 125150.00, 161550.00,  74200.00,  52000.00,  68200.00 ],
    alimentacao: [  28178.00,  40888.00,  35200.00,  35820.00,  16700.00,  14600.00 ]
  }
},
        top5: [
            { name: 'Moda', value: 1348346 },
            { name: 'Saúde', value: 868387 },
            { name: 'Beleza', value: 619117 },
            { name: 'Acessórios', value: 547730 },
            { name: 'Alimentação', value: 407563 }
        ]
    },

    // Ciclo de Vendas
    salesCycle: {
        bySize: {
            small: {
                average: 24.6,
                median: 10,
                samples: 125,
                outliers: [
                    { company: 'Murau', days: 448 },
                    { company: 'Ponto Natural', days: 186 }
                ]
            },
            medium: {
                average: 37.3,
                median: 8,
                samples: 89,
                outliers: [
                    { company: 'Americanas', days: 247 },
                    { company: 'Centauro', days: 189 }
                ]
            },
            large: {
                average: 28.0,
                median: 13,
                samples: 45,
                outliers: [
                    { company: 'Discovery', days: 282 },
                    { company: 'Unilever', days: 156 }
                ]
            }
        },
        target: 15
    },

    // War Room Metrics
    warRoom: {
        initiatives: [
            {
                id: 'init_001',
                title: 'Virar a chave RD Station CRM - 100% operacional',
                description: 'Migração completa das assessoras para o CRM até final do mês',
                status: 'in-progress',
                priority: 'critical',
                category: 'tech',
                impact: 10,
                effort: 3,
                progress: 45,
                owner: 'Tech Team',
                phase: 'immediate'
            },
            {
                id: 'init_002',
                title: 'Integração RD Station ↔ Monday.com ↔ Omie',
                description: 'Pipeline completo: CRM → Gestão de Contratos → ERP Financeiro',
                status: 'not-started',
                priority: 'high',
                category: 'tech',
                impact: 9,
                effort: 4,
                progress: 0,
                owner: 'Tech + Finance',
                phase: 'immediate'
            },
            {
                id: 'init_003',
                title: 'Implementar D4Sign para contratos digitais',
                description: 'Automatizar assinatura de contratos com influencers e brands',
                status: 'not-started',
                priority: 'high',
                category: 'process',
                impact: 8,
                effort: 2,
                progress: 0,
                owner: 'Legal + Tech',
                phase: 'immediate'
            },
            {
                id: 'init_004',
                title: 'Programa Anti-Churn Intensivo',
                description: 'Reduzir churn de 75% para <50% em 6 meses através de CS dedicado',
                status: 'in-progress',
                priority: 'critical',
                category: 'cs',
                impact: 10,
                effort: 7,
                progress: 20,
                owner: 'CS Team',
                phase: 'immediate'
            },
            {
                id: 'init_005',
                title: 'WhatsApp Business API + Templates',
                description: 'Escalar comunicação 10x com templates aprovados',
                status: 'not-started',
                priority: 'high',
                category: 'tech',
                impact: 7,
                effort: 4,
                progress: 0,
                owner: 'Tech Team',
                phase: 'short'
            },
            {
                id: 'init_006',
                title: 'Portal Self-Service v2.0',
                description: 'MVP do portal para influenciadores com dashboard e métricas',
                status: 'not-started',
                priority: 'medium',
                category: 'product',
                impact: 8,
                effort: 6,
                progress: 0,
                owner: 'Product Team',
                phase: 'medium'
            },
            {
                id: 'init_007',
                title: 'Cadências de Vendas Automatizadas',
                description: 'Implementar sequências de follow-up e nutrição no RD Station',
                status: 'not-started',
                priority: 'high',
                category: 'process',
                impact: 8,
                effort: 3,
                progress: 0,
                owner: 'Sales Team',
                phase: 'immediate'
            },
            {
                id: 'init_008',
                title: 'Dashboard BI Real-time',
                description: 'Conectar todas as fontes de dados em dashboard unificado',
                status: 'in-progress',
                priority: 'high',
                category: 'data',
                impact: 9,
                effort: 5,
                progress: 30,
                owner: 'Data Team',
                phase: 'short'
            },
            {
                id: 'init_009',
                title: 'Programa Micro-Influencers',
                description: 'Diversificar portfólio para reduzir concentração de receita',
                status: 'not-started',
                priority: 'medium',
                category: 'strategic',
                impact: 7,
                effort: 6,
                progress: 0,
                owner: 'Marketing',
                phase: 'medium'
            },
            {
                id: 'init_010',
                title: 'Marketplace MVP',
                description: 'Primeira versão do marketplace de influenciadores',
                status: 'not-started',
                priority: 'high',
                category: 'product',
                impact: 10,
                effort: 9,
                progress: 0,
                owner: 'Product Team',
                phase: 'long'
            }
        ],
        metrics: {
            automation_rate: { current: 15, target: 70, unit: '%' },
            crm_adoption: { current: 45, target: 100, unit: '%' },
            data_quality: { current: 62, target: 95, unit: '%' },
            sales_cycle: { current: 26, target: 15, unit: 'dias' },
            retention_rate: { current: 25.1, target: 75, unit: '%' }
        }
    },

    // Tech Stack
    techStack: {
        current: [
            { name: 'RD Station CRM', status: 'implementing', category: 'CRM' },
            { name: 'Monday.com', status: 'active', adoption: 100, category: 'Project Management' },
            { name: 'Omie ERP', status: 'active', adoption: 100, category: 'Financial' },
            { name: 'D4Sign', status: 'active', adoption: 100, category: 'Communication', risk: '' },
            { name: 'Excel', status: 'manual', adoption: 100, category: 'Analytics' }
        ],
        future: [
            { name: 'Azure Synapse', status: 'planned', quarter: 'Q3 2025', category: 'Data Lake' },
            { name: 'WhatsApp Business API', status: 'planned', quarter: 'Q3 2025', category: 'Communication' },
            { name: 'D4Sign', status: 'planned', quarter: 'Q3 2025', category: 'Legal' },
            { name: 'Twilio', status: 'planned', quarter: 'Q4 2025', category: 'Communication' },
            { name: 'Marketplace Platform', status: 'planned', quarter: 'Q1 2026', category: 'Product' }
        ]
    },

    // Projeções
    projections: {
        gmv: {
            // Projeções conservadoras-otimistas para o resto de 2025
            '2025-08': { value: 740000, trades: 43, ticket: 17209, projected: true },
            '2025-09': { value: 780000, trades: 45, ticket: 17333, projected: true },
            '2025-10': { value: 820000, trades: 47, ticket: 17447, projected: true },
            '2025-11': { value: 850000, trades: 49, ticket: 17347, projected: true },
            '2025-12': { value: 880000, trades: 51, ticket: 17255, projected: true }
        },
        contracts: {
            '2025-08': 90,
            '2025-09': 95,
            '2025-10': 100,
            '2025-11': 105,
            '2025-12': 110
        }
    }
};

// Função para gerar dados para gráficos
function prepareChartData() {
    const gmvMonths = [];
    const gmvValues = [];
    const ticketValues = [];
    
    // Preparar dados GMV - usar diretamente os arrays já preparados
    SollerData.gmv.labels.forEach((label, index) => {
        gmvMonths.push(label);
        gmvValues.push(SollerData.gmv.values[index]);
    });

    return {
        gmv: {
            labels: gmvMonths,
            values: gmvValues,
            tickets: ticketValues
        },
        contracts: {
            labels: SollerData.contracts.labels,
            data: SollerData.contracts.data
        }
    };
}

// Exportar dados globalmente - APENAS UMA VEZ no final do arquivo
window.SollerData = SollerData;
window.prepareChartData = prepareChartData;