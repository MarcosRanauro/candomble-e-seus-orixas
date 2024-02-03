import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Seu site</h5>

              <p>
                Aqui você pode escrever uma breve descrição do seu site.
              </p>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Links Úteis</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 2</a>
                </li>
                <li>
                  <a href="#">Link 3</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Contato</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <p>
                    <i class="fas fa-home me-3"></i> Seu endereço
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-envelope me-3"></i> seuemail@email.com
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-phone me-3"></i> (12) 3456-7890
                  </p>
                </li>
              </ul>
            </div>
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Redes Sociais</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="text-center p-3">
          © 2023 Copyright:
          <a class="text-dark" href="#">Seu site</a>
        </div>
      </footer>
    </div>
  )
}
