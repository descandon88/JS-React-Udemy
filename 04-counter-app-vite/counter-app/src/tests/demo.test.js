describe('Pruebas en <DemoComponent />', ()=>{
    test('Esta prueba no debe fallar',()=>{
    
    // if (1===0){
    //     throw new Error('No puede dividir entre cero');
    // }
    const message1 = 'Hola Mundo';
    const message2 = message1.trim();

    expect(message1).toBe(message2);
    });
});

// no se acostumbra realizar mas de un describe en un archivo test