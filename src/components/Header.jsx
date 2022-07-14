/*import './Header.module.css'
Quando a gente importa um CSS module, diferente de quando a gente importa um CSS normal, eu preciso dar um nome para o estilo, não basta colocar apenas o endereço, como num CSS normal
*/

import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="logotipo do Ignite"/>
      <strong >Ignite Feed</strong>
    </header>
    /* QUando usamos o CSS module, ao invés de simplesmente digitar o nome da classe definida no CSS, eu terei que abrir {}, para entender que se trata de um javascript, fazer menção ao arquivo importado, no exemplo com nome styles, e depois fazer referência a classe criada no CSS 
    
    No console, quando vamos verificar a tag header e a sua estilização, observaremos que foi criado um hash esquisito para o nome da classe, e não simplesmente "header", conforme definimos no CSS.
    
    Isso porque um dos motivos para a gente utilizar o CSS modules é evitar que a estilização de um componente afetem outros componentes
    Então a estilização desse cabeçario com a classe de nome "header" não afetará outros componentes, cuja classe no CSS seja também nomeada como "header", isso porque esse module CSS gerará automaticamente, para cada classe que a gente está estilizando, um nome hash com hexadecimal aleatório
    */
  );
}