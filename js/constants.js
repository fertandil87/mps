angular.module('myApp')
    .constant('DOCUMENTOS', {
        singles_categoria1_horarios: "https://docs.google.com/document/d/1n1LvOBfPPQgG3EkZ6bzUc3IhMrxbcRtIxrEz5Q5mxG8/pub?embedded=true",
        singles_categoria1_resultados: "https://docs.google.com/document/d/1z1ZcOg8YI0SDHjtoQvEb40PFsJIPpc2QhY-yDZ6BwyI/pub?embedded=true",
        singles_categoria1_resumen: "https://docs.google.com/document/d/1yBs4L_ZVqZYjIWuND6i6DJRUI_AEiORIEDdAXrAiU8w/pub?embedded=true",
        
        singles_categoria2_horarios: "https://docs.google.com/document/d/1yQX2Fy2dPtG-v_uQ6zzOzMjRFloszVm-CXS3L9l5WM0/pub?embedded=true",
        singles_categoria2_resultados: "https://docs.google.com/document/d/1bAERh2OL7a5bCGjWiB2q5Bpjy5gRxg6I2sPD4EcH3Yo/pub?embedded=true",
        singles_categoria2_resumen: "https://docs.google.com/document/d/1_pafoPUA1f51NWaz6Lt4CuwNZxf_RAWfIjUYzhMaSao/pub?embedded=true",
        
        singles_categoria3_horarios: "https://docs.google.com/document/d/1mLYjaIaJXzeBoq-R3ygF_4bXSWvm-iQFbMybELRhp2M/pub?embedded=true",
        singles_categoria3_resultados: "https://docs.google.com/document/d/1ANLYZOP0f01noAY80BrL3oFIJhUDb3Em2GDdg2vH9Mg/pub?embedded=true",
        singles_categoria3_resumen: "https://docs.google.com/document/d/1soH-Wheyy0mzFHu-MjYPQob3FKSE_SpZ2kDzNU8hF5E/pub?embedded=true",
        
        singles_categoria4_horarios: "https://docs.google.com/document/d/1EczGwMsEM4hvROFaXLFVy4ANGbfXkYPqWrN5CjZ9Rfc/pub?embedded=true",
        singles_categoria4_resultados: "https://docs.google.com/document/d/1wb0vYnfv407OkZzXe63xncibR3rL3mGrL5g7JUBrUp0/pub?embedded=true",
        singles_categoria4_resumen: "https://docs.google.com/document/d/1X3c56m9FSXRylyvJv03bE3HJp9RbQGIZY7a3_cKXFFc/pub?embedded=true",
        
        singles_categoria5_horarios: "https://docs.google.com/document/d/162MqHD8KJb3ikzSRzWwBBKthSGFcvtiEgL99-dJMplE/pub?embedded=true",
        singles_categoria5_resultados: "https://docs.google.com/document/d/1sENBCcH8Y1a7087K6zHQT6Ha1VTGD9CpEzM6VPVJr14/pub?embedded=true",
        singles_categoria5_resumen: "https://docs.google.com/document/d/11DpdhLm7t4aZdX9qBozhwbDxEMAVeP5n1gNJuUXLy7s/pub?embedded=true",
        
        dobles_masculino: "https://docs.google.com/document/d/123Mm_ZzbXOMP8DFr7l869MDe9218mMkdPBnxdOCJRQM/pub?embedded=true",
        dobles_femenino: "https://docs.google.com/document/d/1rPzApmouDgz7p7AjdV7HiKhLb6CDkUMhTNbFbJUxP9A/pub?embedded=true",
        dobles_mixto: "https://docs.google.com/document/d/16GGtu-QIhAL3dOo7nwF88VIgRXWEU2gFF6jyitGrc1I/pub?embedded=true",
        
        desafios_resultados: "https://docs.google.com/document/d/19y9khd0HKPZ2uII9O4rEpEKnnorA5y_fmJ5WCVe5JP4/pub?embedded=true",
        desafios_comentarios: "https://docs.google.com/document/d/1SvblAMAr3hUtY1RDwfUNqDK95ZZm1jLdaM9mHBnzyns/pub?embedded=true"
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