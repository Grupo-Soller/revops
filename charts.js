// charts.js - Configuração e criação de todos os gráficos com verificações

document.addEventListener('DOMContentLoaded', function() {
    // Aguardar um pouco para garantir que data.js foi carregado
    setTimeout(function() {
        initializeCharts();
    }, 100);
});

function initializeCharts() {
    // Verificar se os dados existem
    if (!window.SollerData) {
        console.error('SollerData não encontrado. Verifique se data.js foi carregado antes de charts.js');
        return;
    }
    
    // Configurações globais do Chart.js
    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    Chart.defaults.color = '#1f2937';
    
    // Criar todos os gráficos
    createAllCharts();
}

// Função principal para criar todos os gráficos
function createAllCharts() {
    // 1. Gráfico de Origem dos Leads
    createSourceChart();
    
    // 2. Gráfico de Contratos
    createContractsChart();
    
    // 3. Gráfico GMV
    createGMVChart();
    
    // 4. Gráfico de Nichos (já criado em main.js)
    // createNichesChart() é chamado em main.js
}

// Função para criar gráfico de origem dos leads
function createSourceChart() {
    const sourceCtx = document.getElementById('sourceChart');
    if (!sourceCtx) return;
    
    // Verificar dados
    if (!window.SollerData.leadSource || !window.SollerData.leadSource.distribution) {
        console.warn('Dados de origem dos leads não encontrados');
        return;
    }
    
    // Destruir gráfico existente se houver
    if (sourceCtx.chart) {
        sourceCtx.chart.destroy();
    }
    
    sourceCtx.chart = new Chart(sourceCtx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: ['Inbound', 'Outbound'],
            datasets: [{
                data: [
                    window.SollerData.leadSource.distribution.inbound.count,
                    window.SollerData.leadSource.distribution.outbound.count
                ],
                backgroundColor: ['#00A8FF', '#FF375F'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14
                        },
                        color: '#ffffff'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Função para criar gráfico de contratos
function createContractsChart() {
    const contractsCtx = document.getElementById('contractsChart');
    if (!contractsCtx) return;
    
    // Verificar dados
    if (!window.SollerData.contracts || !window.SollerData.contracts.data) {
        console.warn('Dados de contratos não encontrados');
        return;
    }
    
    // Destruir gráfico existente se houver
    if (contractsCtx.chart) {
        contractsCtx.chart.destroy();
    }
    
    contractsCtx.chart = new Chart(contractsCtx.getContext('2d'), {
        type: 'line', // MUDANÇA: Voltando para gráfico de linha
        data: {
            labels: window.SollerData.contracts.labels,
            datasets: [
                {
                    label: '2023',
                    data: window.SollerData.contracts.data[2023],
                    borderColor: '#00A8FF',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6
                },
                {
                    label: '2024',
                    data: window.SollerData.contracts.data[2024],
                    borderColor: '#FF375F',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6
                },
                {
                    label: '2025',
                    data: window.SollerData.contracts.data[2025],
                    borderColor: '#00FF84',
                    backgroundColor: 'transparent',
                    borderWidth: 3,
                    tension: 0.4,
                    pointRadius: 0,
                    pointHoverRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                title: {
                    display: false // Removendo título do gráfico
                },
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: false,
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            if (context.parsed.y === null) {
                                return context.dataset.label + ': Sem dados';
                            }
                            return context.dataset.label + ': ' + context.parsed.y + ' contratos';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 120,
                    ticks: {
                        stepSize: 10,
                        color: '#666'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Função para criar gráfico GMV
function createGMVChart() {
    const gmvCtx = document.getElementById('gmvChart');
    if (!gmvCtx) return;
    
    // Verificar dados
    if (!window.SollerData.gmv || !window.SollerData.gmv.values) {
        console.warn('Dados de GMV não encontrados');
        return;
    }
    
    // Destruir gráfico existente se houver
    if (gmvCtx.chart) {
        gmvCtx.chart.destroy();
    }
    
    // Preparar dados agrupados por mês
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    
    // Separar dados por ano
    const data2023 = window.SollerData.gmv.values.slice(0, 12);
    const data2024 = window.SollerData.gmv.values.slice(12, 24);
    const data2025 = window.SollerData.gmv.values.slice(24, 36);
    
    gmvCtx.chart = new Chart(gmvCtx.getContext('2d'), {
        type: 'bar',
        data: {
            labels: months,
            datasets: [
                {
                    label: '2023',
                    data: data2023,
                    backgroundColor: '#00A8FF',
                    borderRadius: 4,
                    categoryPercentage: 0.8,
                    barPercentage: 0.9
                },
                {
                    label: '2024',
                    data: data2024,
                    backgroundColor: '#FF375F',
                    borderRadius: 4,
                    categoryPercentage: 0.8,
                    barPercentage: 0.9
                },
                {
                    label: '2025',
                    data: data2025.map((val, idx) => idx < 7 ? val : null), // Apenas até julho
                    backgroundColor: '#00FF84',
                    borderRadius: 4,
                    categoryPercentage: 0.8,
                    barPercentage: 0.9
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                title: {
                    display: false
                },
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 12
                        },
                        color: '#f4f4f4'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y;
                            if (value === null || value === undefined) {
                                return context.dataset.label + ': Sem dados';
                            }
                            return context.dataset.label + ': ' + new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(value);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return 'R$ ' + (value / 1000000).toFixed(1) + 'M';
                        },
                        color: '#666'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: '#666'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Função createCharts global para compatibilidade
window.createCharts = function() {
    createAllCharts();
};