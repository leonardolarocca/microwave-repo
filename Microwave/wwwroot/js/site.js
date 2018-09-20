function Subtrai(valor) {
    if (valor <= 1) {
        return document.getElementById('potencia').value = 1;
    }
    document.getElementById('potencia').value = --valor;
}
function Soma(valor) {
    if (valor >= 10) {
        return document.getElementById('potencia').value = 10;
    }
    document.getElementById('potencia').value = ++valor;
}


function SubtraiMinuto(valor) {
    if (valor <= 0) {
        return document.getElementById('minutos').value = 0;
    }
    document.getElementById('minutos').value = --valor;
}

function SomaMinuto(valor) {
    if (valor >= 59) {
        return document.getElementById('minutos').value = 59;
    }
    document.getElementById('minutos').value = ++valor;
}

function SubtraiSegundo(valor) {
    if (valor <= 0) {
        return document.getElementById('segundos').value = 0;
    }
    document.getElementById('segundos').value = --valor;
}
function SomaSegundo(valor) {
    if (valor >= 59) {
        return document.getElementById('segundos').value = 59;
    }
    document.getElementById('segundos').value = ++valor;
}

function ConvertToSeconds(minutes, seconds) {
    if (minutes >= 1) {
        seconds += minutes * 60;
    } 
    return seconds;
}


var configMinuto;
var configSegundo;
var mostrarValor;
var evento = null;
var contador = null;
var minuto = 0;
var segundo = 0;

function IniciarCronometro(valor) {
    this.evento = valor;    
    this.configMinuto = document.getElementById('minutos').value;
    this.configSegundo = document.getElementById('segundos').value;  
    this.mostrarValor = document.getElementById('tempo');    

    if (evento == "start") {        
        if (!document.getElementById('minutos').readOnly) {
            if (!this.validarNumero(this.configMinuto)) {
                alert("Campo minuto não é um número!");
                return;
            }
            if (!this.validarNumero(this.configSegundo) || document.getElementById('segundos').value > 59) {
                alert("Campo segundo não é um número válido (0 a 59)!");
                return;
            }
            document.getElementById("feedback").innerHTML = `
                        <div class="form-group text-center text-danger">
                            <span class="glyphicon glyphicon-repeat normal-right-spinner" style="font-size: 8em"></span>
                            <h3>Preparando</h3>
                        </div>
            `;

            document.getElementById('minutos').readOnly = true;
            document.getElementById('segundos').readOnly = true;
            document.getElementById('btnStart').disabled = true;
            document.getElementById('btnStop').disabled = false;
            document.getElementById('btnPause').disabled = false;
            this.minuto = document.getElementById('minutos').value;
            if (Number(document.getElementById('minutos').value) == 0 && Number(document.getElementById('segundos').value) == 0) {
                this.segundo = 30;
            } else {
                this.segundo = document.getElementById('segundos').value;
            }   
            if (this.segundo < 10) {
                this.mostrarValor.innerHTML = "0" + this.minuto + ":0" + this.segundo;
            } else {
                this.mostrarValor.innerHTML = "0" + this.minuto + ":" + this.segundo;
            }
            
        } else {
            if (this.segundo == 0 && this.minuto != 0) {
                this.segundo = 59;
                this.minuto--;
            } else {
                this.segundo--;
            }
            if (this.minuto == 0 && this.segundo == 0) {                
                document.getElementById('minutos').readOnly = false;
                document.getElementById('segundos').readOnly = false;
                document.getElementById('btnStart').disabled = false;
                document.getElementById('btnStop').disabled = true;
                document.getElementById('btnPause').disabled = true;
                this.mostrarValor.innerHTML = "00:00";
                clearTimeout(this.contador);
                document.getElementById("feedback").innerHTML = `
                        <div class="form-group text-center text-success">
                            <span class="glyphicon glyphicon-ok" style="font-size: 8em"></span>
                            <h3>Pronto!</h3>
                        </div>
                `;
                return;                
            }

            novoMinuto = null;
            novoSegundo = null;
            if (this.minuto <= 9) {
                novoMinuto = "0" + this.minuto;
            } else {
                novoMinuto = this.minuto;
            }
            if (this.segundo <= 9) {
                novoSegundo = "0" + this.segundo;
            } else {
                novoSegundo = this.segundo;
            }
            this.mostrarValor.innerHTML = novoMinuto + ":" + novoSegundo;
        }
    }
    clearTimeout(this.contador);
    this.contador = setTimeout('IniciarCronometro(evento)', 1000);
}

function validarNumero(valor) {
    if (!isNaN(parseFloat(valor)) && isFinite(valor)) {
        if (valor >= 0) {
            return true;
        }
    }
    return false;
}



function PausarCronometro() {
    if (document.getElementById('btnPause').value == "pause") {
        document.getElementById('btnPause').value = "voltar";
        document.getElementById('btnPause').innerHTML = "<i class='glyphicon glyphicon-play'></i>&nbsp;Continuar";
        this.evento = "pause";
        document.getElementById("feedback").innerHTML = `
                        <div class="form-group text-center text-warning">
                            <span class="glyphicon glyphicon-pause" style="font-size: 8em"></span>
                            <h3>Em pausa</h3>
                        </div>
            `;
    } else {
        document.getElementById('btnPause').value = "pause"
        document.getElementById('btnPause').innerHTML = "<i class='glyphicon glyphicon-pause'></i>&nbsp;Pausar";
        this.evento = "start";
        document.getElementById("feedback").innerHTML = `
                        <div class="form-group text-center text-danger">
                            <span class="glyphicon glyphicon-repeat normal-right-spinner" style="font-size: 8em"></span>
                            <h3>Preparando</h3>
                        </div>
            `;
    }
}

function ResetarCronometro() {
    document.getElementById('minutos').readOnly = false;
    document.getElementById('segundos').readOnly = false;
    document.getElementById('btnStart').disabled = false;
    document.getElementById('btnStop').disabled = true;
    document.getElementById('btnPause').disabled = true;
    document.getElementById('btnStart').value = "pause";
    this.mostrarValor.innerHTML = "00:00";
    clearTimeout(this.contador);
    document.getElementById("feedback").innerHTML = `
                        <div class="form-group text-center text-info">
                            <span class="glyphicon glyphicon-fire" style="font-size: 8em"></span>
                            <h3>Aguardando...</h3>
                        </div>
            `;
}

