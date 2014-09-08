angular.module('myApp')
    .constant('DOCUMENTOS', {
        singles_categoria1_horarios: "https://docs.google.com/document/d/1n1LvOBfPPQgG3EkZ6bzUc3IhMrxbcRtIxrEz5Q5mxG8/pub?embedded=true",
        singles_categoria1_resultados: "https://docs.google.com/document/d/1z1ZcOg8YI0SDHjtoQvEb40PFsJIPpc2QhY-yDZ6BwyI/pub?embedded=true",
        singles_categoria1_resumen: "https://docs.google.com/document/d/1n1LvOBfPPQgG3EkZ6bzUc3IhMrxbcRtIxrEz5Q5mxG8/pub?embedded=true"
    })
    .constant('MENU', {
        singles: {
            categoria1: {
                titulo: "Categoria 1",
                secciones: [
                    {
                        titulo: "Horarios",
                        link: "#/singles/categoria1/horarios"
                    },
                    {
                        titulo: "Resultados",
                        link: "#/singles/categoria1/resultados"
                    },
                    {
                        titulo: "Resumen",
                        link: "#/singles/categoria1/resumen"
                    }
                ]
            },
            categoria2: {
                titulo: "Categoria 2",
                secciones: [
                    {
                        titulo: "Horarios",
                        link: "#/singles/categoria2/horarios"
                    },
                    {
                        titulo: "Resultados",
                        link: "#/singles/categoria2/resultados"
                    },
                    {
                        titulo: "Resumen",
                        link: "#/singles/categoria2/resumen"
                    }
                ]
            },
            categoria3: {
                titulo: "Categoria 3",
                secciones: [
                    {
                        titulo: "Horarios",
                        link: "#/singles/categoria3/horarios"
                    },
                    {
                        titulo: "Resultados",
                        link: "#/singles/categoria3/resultados"
                    },
                    {
                        titulo: "Resumen",
                        link: "#/singles/categoria3/resumen"
                    }
                ]
            },
            categoria4: {
                titulo: "Categoria 4",
                secciones: [
                    {
                        titulo: "Horarios",
                        link: "#/singles/categoria4/horarios"
                    },
                    {
                        titulo: "Resultados",
                        link: "#/singles/categoria4/resultados"
                    },
                    {
                        titulo: "Resumen",
                        link: "#/singles/categoria4/resumen"
                    }
                ]
            },
            categoria5: {
                titulo: "Categoria 5",
                secciones: [
                    {
                        titulo: "Horarios",
                        link: "#/singles/categoria5/horarios"
                    },
                    {
                        titulo: "Resultados",
                        link: "#/singles/categoria5/resultados"
                    },
                    {
                        titulo: "Resumen",
                        link: "#/singles/categoria5/resumen"
                    }
                ]
            }
        },
        dobles: {
            dobles: {
                titulo: "Dobles",
                secciones: [
                    {
                        titulo: "Masculino",
                        link: "#/dobles/masculino"
                    },
                    {
                        titulo: "Femenino",
                        link: "#/dobles/femenino"
                    },
                    {
                        titulo: "Mixto",
                        link: "#/dobles/mixto"
                    }
                ]
            }
        },
        desafios: {
            desafios: {
                titulo: "Desafios",
                secciones: [{
                        titulo: "Resultados",
                        link: "#/desafios/resultados"

                    },
                    {
                        titulo: "Comentarios",
                        link: "#/desafios/comentarios"
                    }]
            }
        }
    })

    ;