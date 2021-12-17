import { browser, element, by } from 'protractor';

describe('Prueba home',()=>{
    //cod de configuracion
    beforeEach(()=>{
        browser.get("/");
    });

    //Prueba 1
    it("Se carga automaticamente al login", async ()=>{
        await element(by.css("[home==login]"));
        browser.driver.sleep(500);
    });

});

describe('Prueba login',()=>{
    //cod de configuracion
    beforeEach(()=>{
        browser.get("./login.page");
    });

    //Prueba 1
    it("Se muestra el titulo de la aplicacion",()=>{
        expect(element(by.css(".tab-selected ion-title")).getText()).toContain("RegistrAPP");
    });

    //Prueba 2
    it("Se muestra el label usuario",()=>{
        expect(element(by.css(".tab-selected mat-label")).getText()).toContain("Usuario");
    });

    //Prueba 3
    it("Se muestra el label contraseña",()=>{
        expect(element(by.css(".tab-selected mat-label")).getText()).toContain("Contraseña");
    });

    //Prueba 4
    it("Se muestra el boton iniciar",()=>{
        expect(element(by.className(".tab-selected iniciar")).getText()).toContain("Iniciar Sesión");
    });
});

describe('Prueba menu-docente',()=>{
    //cod de configuracion
    beforeEach(()=>{
        browser.get("./menu-docente.page");
    });

    it("El usuario inicia sesion navegando al menu de inicio", async()=>{
        await element(by.css("[login==menu-docente]"));
        browser.driver.sleep(500);
        expect(element(by.className(".tab selected title")).getText()).toContain("Bienvenido");
    });
});

describe ('prueba recuperar-c',()=>{
    //cod de configuracion
    beforeEach(()=>{
        browser.get("./recuperar-c.page");
    });

    it("El usuario navega a recuperar contraseña"), async()=>{
        await element(by.css("[login==recuperar-c]"));
        browser.driver.sleep(500);
        expect(element(by.css(".tab selected titulo")).getText()).toContain("Ingrese su usuario para recuperar la contraseña");
    }
});


describe ('prueba comp-asist',()=>{
    //cod de configuracion
    beforeEach(()=>{
        browser.get("./comp-asist.component");
    });

    it("El usuario navega al segmento asignatura"), async()=>{
        await element(by.css("[menu-docente==comp-asist]"));
        browser.driver.sleep(500);
        expect(element(by.css(".tab selected ion-card-title")).getText()).toContain("Asignaturas");
    }
});

describe ('prueba comp-asistencia',()=>{
    //cod de configuracion
    beforeEach(()=>{
        browser.get("./comp-asistencia.component");
    });

    it("El usuario navega al segmento asistencia"), async()=>{
        await element(by.css("[menu-docente==comp-asistencia]"));
        browser.driver.sleep(500);
        expect(element(by.css(".tab selected ion-card-title")).getText()).toContain("Asistencia");
    }
});

describe ('prueba comp-qr',()=>{
    //cod de configuracion
    beforeEach(()=>{
        browser.get("./comp-qr.component");
    });

    it("El usuario navega al segmento codigo QR"), async()=>{
        await element(by.css("[menu-docente==comp-qr]"));
        browser.driver.sleep(500);
        expect(element(by.css(".tab selected ion-icon")).getText()).toContain("Escanear QR");
    }
});






