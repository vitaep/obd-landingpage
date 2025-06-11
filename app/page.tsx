"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function OBDTechLanding() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "banco-digital",
        "pagamentos",
        "apis",
        "cartoes",
        "credito",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const FloatingElements = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-20 left-10 w-20 h-20 bg-zinc-400/10 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-zinc-500/10 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-zinc-300/10 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-10 w-18 h-18 bg-zinc-600/10 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-zinc-400/10 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-zinc-500/10 rounded-full animate-bounce delay-1200"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black text-white font-['Poppins',sans-serif] relative">
      <FloatingElements />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-zinc-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/logo-obd-branco.png"
                alt="OBD Tech"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Início" },
                { id: "banco-digital", label: "Banco Digital" },
                { id: "pagamentos", label: "Pagamentos" },
                { id: "apis", label: "APIs" },
                { id: "cartoes", label: "Cartões" },
                { id: "credito", label: "Crédito" },
                { id: "contato", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-zinc-300 ${
                    activeSection === item.id
                      ? "text-zinc-300 border-b-2 border-zinc-400"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-md rounded-lg mb-4 p-4">
              {[
                { id: "home", label: "Início" },
                { id: "banco-digital", label: "Banco Digital" },
                { id: "pagamentos", label: "Pagamentos" },
                { id: "apis", label: "APIs" },
                { id: "cartoes", label: "Cartões" },
                { id: "credito", label: "Crédito" },
                { id: "contato", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 hover:text-zinc-300 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Image
              className="mx-auto mb-12"
              src="obd-logo.png"
              alt="logo obd"
              width={200}
              height={40}
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zinc-200 via-white to-zinc-300 bg-clip-text text-transparent">
              OBD Tech
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zinc-300 max-w-3xl mx-auto">
              Sistemas e tecnologia Financeira completa para o seu negócio
            </p>
            <p className="text-lg mb-12 text-zinc-400 max-w-4xl mx-auto">
              Transforme seu negócio com soluções financeiras personalizadas,
              seguras e escaláveis. Nós cuidamos da tecnologia para você focar
              no crescimento.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-zinc-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-zinc-400 text-sm">Whitelabel</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-zinc-400 text-sm">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">API</div>
                <div className="text-zinc-400 text-sm">Completa</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("contato")}
                className="bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-700 hover:to-zinc-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Começar Agora
              </button>
              <button
                onClick={() => scrollToSection("banco-digital")}
                className="border-2 border-zinc-500 hover:bg-zinc-500/20 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banco Digital Section */}
      <section id="banco-digital" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">
              Banco Digital Completo
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Quer se tornar uma fintech? Com a OBD Tech, é possível! Nós
              cuidamos da burocracia e da infraestrutura tecnológica enquanto
              você foca no crescimento do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Conta Digital Completa
              </h3>
              <p className="text-zinc-400 mb-4">
                Ofereça contas digitais com todas as funcionalidades bancárias
                tradicionais
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Abertura de conta 100% digital</li>
                <li>• PIX integrado</li>
                <li>• TED e DOC</li>
                <li>• Extrato em tempo real</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Banco Whitelabel
              </h3>
              <p className="text-zinc-400 mb-4">
                Feito sob medida às suas preferências!
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Completamente personalizado</li>
                <li>• Seguimos o seu Branding</li>
                <li>• Flexibilidade para atender as suas necessidades</li>
                <li>• Foco em escalabilidade</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Sociedade de Crédito Direto
              </h3>
              <p className="text-zinc-400 mb-4">
                Crédito sem Bancos tradicionais, com total compliance e
                segurança
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Crédito por sociedade ou direto</li>
                <li>• Operação Digital</li>
                <li>• Taxas de Juros mais competitivas para o mercado</li>
                <li>• Regulamentado pelo Banco Central</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zinc-800/30 to-zinc-700/30 p-8 rounded-2xl backdrop-blur-sm border border-zinc-600/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Por que escolher nossa solução bancária?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Time to Market Reduzido
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Lance sua fintech rapidamente, sem enrolas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Custos Operacionais Baixos
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Infraestrutura compartilhada e otimizada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Escalabilidade Garantida
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Cresça sem se preocupar com limitações técnicas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-zinc-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm">🏷️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        100% Whitelabel
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Sua marca em todos os pontos de contato
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">💰</div>
                <div className="text-3xl font-bold text-white mb-2">
                  Economia de até 70%
                </div>
                <div className="text-zinc-400">
                  em custos de desenvolvimento
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagamentos Section */}
      <section id="pagamentos" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">
              OBD Payments
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Personalize pagamentos, escale seu negócio e amplie receitas sem
              preocupações regulatórias — cuidamos de tudo, do compliance às
              integrações via API.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">💳</div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-zinc-400 text-sm">Whitelabel</div>
            </div>
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-2xl font-bold text-white mb-1">{"<1s"}</div>
              <div className="text-zinc-400 text-sm">Tempo de Resposta</div>
            </div>
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">🔒</div>
              <div className="text-2xl font-bold text-white mb-1">99.99%</div>
              <div className="text-zinc-400 text-sm">Taxa de Aprovação</div>
            </div>
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">📈</div>
              <div className="text-2xl font-bold text-white mb-1">Marca</div>
              <div className="text-zinc-400 text-sm">Sua Identidade</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Soluções de Pagamento Completas
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Gateway Unificado
                    </h4>
                    <p className="text-zinc-400">
                      Uma única integração para todos os meios de pagamento:
                      cartões, PIX, boleto, carteiras digitais e muito mais.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">🤖</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Antifraude Inteligente
                    </h4>
                    <p className="text-zinc-400">
                      Machine learning avançado para detectar e prevenir fraudes
                      em tempo real, protegendo seu negócio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Taxas Competitivas
                    </h4>
                    <p className="text-zinc-400">
                      As menores taxas do mercado com transparência total. Sem
                      taxas ocultas ou surpresas no final do mês.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm border border-zinc-700/50">
              <h4 className="text-xl font-semibold mb-4 text-white">
                Meios de Pagamento Suportados
              </h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  Cartão de Crédito
                </div>
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  Cartão de Débito
                </div>
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  PIX
                </div>
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  Boleto Bancário
                </div>
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  Apple Pay
                </div>
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  Google Pay
                </div>
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  PayPal
                </div>
                <div className="flex items-center text-zinc-300">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>
                  Mercado Pago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APIs Section */}
      <section id="apis" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">
              Integrações de APIs
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              A OBD Tech oferece infraestrutura para seu crescimento em todos os
              canais: físico e digital. APIs robustas e documentação completa
              para desenvolvedores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                APIs RESTful
              </h3>
              <p className="text-zinc-400 mb-4">
                APIs modernas e padronizadas seguindo as melhores práticas do
                mercado
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Endpoints intuitivos</li>
                <li>• Versionamento adequado</li>
                <li>• Rate limiting inteligente</li>
                <li>• Webhooks em tempo real</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Flexibilidade de negociação
              </h3>
              <p className="text-zinc-400 mb-4">
                Completamente baseado em multiadquirência
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Negociação direta com adquirentes</li>
                <li>• Aumenta o poder de barganha</li>
                <li>• Otimiza custos em negociação</li>
                <li>• Melhores taxas</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Gateway de Pagamentos
              </h3>
              <p className="text-zinc-400 mb-4">
                Integração para o seu e-commerce
              </p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>• Facilidade de conexão</li>
                <li>• Integração para toda Web</li>
                <li>• Pagamentos com cartão</li>
                <li>• Pagamentos com Pix/Boleto</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zinc-800/30 to-zinc-700/30 p-8 rounded-2xl backdrop-blur-sm border border-zinc-600/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Recursos Técnicos Avançados
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-zinc-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Performance Otimizada
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Latência ultra-baixa com CDN global
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-zinc-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm">🔐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Segurança Avançada
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        OAuth 2.0, JWT e criptografia end-to-end
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-zinc-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-sm">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Monitoramento 24/7
                      </h4>
                      <p className="text-zinc-400 text-sm">
                        Logs detalhados e alertas proativos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Suporte ao Desenvolvedor
                </h3>
                <div className="space-y-4">
                  <div className="bg-zinc-800/50 p-4 rounded-lg transition-all duration-300 hover:bg-zinc-700/50 hover:scale-105 hover:shadow-lg">
                    <h4 className="font-semibold text-white mb-2">
                      Backoffice Completo
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Painel administrativo completo e personalizável
                    </p>
                  </div>
                  <div className="bg-zinc-800/50 p-4 rounded-lg transition-all duration-300 hover:bg-zinc-700/50 hover:scale-105 hover:shadow-lg">
                    <h4 className="font-semibold text-white mb-2">
                      Suporte Técnico
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Time especializado para dúvidas de integração
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cartões Section */}
      <section id="cartoes" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">
              Cartões Personalizados
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Emita cartões físicos e virtuais com total personalização.
              Controle completo sobre limites, categorias e funcionalidades para
              atender às necessidades específicas do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Soluções Completas em Cartões
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">💎</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Cartões Físicos Premium
                    </h4>
                    <p className="text-zinc-400">
                      Design exclusivo, materiais de alta qualidade e entrega
                      expressa em todo o Brasil.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Cartões Virtuais Instantâneos
                    </h4>
                    <p className="text-zinc-400">
                      Criação imediata de cartões virtuais para compras online e
                      assinaturas digitais.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Completamente Whitelabel
                    </h4>
                    <p className="text-zinc-400">
                      Cartões completamente personalizados com sua marca e
                      identidade visual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl mb-3">🚀</div>
                <div className="text-2xl font-bold text-white mb-1">
                  Instantâneo
                </div>
                <div className="text-zinc-400 text-sm">
                  Emissão de cartões virtuais
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl mb-3">🌍</div>
                <div className="text-2xl font-bold text-white mb-1">Global</div>
                <div className="text-zinc-400 text-sm">
                  Aceito em todo mundo
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl mb-3">🔒</div>
                <div className="text-2xl font-bold text-white mb-1">Seguro</div>
                <div className="text-zinc-400 text-sm">
                  Tokenização avançada
                </div>
              </div>
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-2xl font-bold text-white mb-1">Rápido</div>
                <div className="text-zinc-400 text-sm">
                  Processamento em tempo real
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zinc-800/30 to-zinc-700/30 p-8 rounded-2xl backdrop-blur-sm border border-zinc-600/30">
            <h3 className="text-2xl font-bold mb-6 text-white text-center">
              Recursos Exclusivos
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Design Personalizado
                </h4>
                <p className="text-zinc-400 text-sm">
                  Crie cartões únicos com sua marca e identidade visual
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  Gestão Simplificada
                </h4>
                <p className="text-zinc-400 text-sm">
                  Dashboard intuitivo para gerenciar todos os cartões
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏷️</span>
                </div>
                <h4 className="font-semibold text-white mb-2">
                  100% Whitelabel
                </h4>
                <p className="text-zinc-400 text-sm">
                  Cartões com sua marca e identidade visual
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crédito Section */}
      <section id="credito" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">
              Soluções de Crédito Inteligentes
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Ofereça produtos de crédito inovadores com nossa plataforma
              completa. Análise de risco automatizada, aprovação instantânea e
              gestão inteligente de portfólio.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">🔄</div>
              <div className="text-2xl font-bold text-white mb-1">Flexível</div>
              <div className="text-zinc-400 text-sm">Regras Personalizadas</div>
            </div>
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">⚡</div>
              <div className="text-2xl font-bold text-white mb-1">{"<30s"}</div>
              <div className="text-zinc-400 text-sm">Aprovação</div>
            </div>
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">📈</div>
              <div className="text-2xl font-bold text-white mb-1">85%</div>
              <div className="text-zinc-400 text-sm">Taxa de Aprovação</div>
            </div>
            <div className="text-center p-6 bg-zinc-800/30 rounded-xl border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
              <div className="text-3xl mb-3">🛡️</div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-zinc-400 text-sm">Personalização</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Produtos de Crédito Completos
              </h3>
              <div className="space-y-4">
                <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                  <h4 className="font-semibold text-white mb-2">
                    💳 Crédito Rotativo
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Limite pré-aprovado com juros competitivos e flexibilidade
                    total
                  </p>
                </div>
                <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                  <h4 className="font-semibold text-white mb-2">
                    🏠 Empréstimo Pessoal
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Valores altos com parcelas fixas e prazos estendidos
                  </p>
                </div>
                <div className="bg-zinc-800/30 p-4 rounded-lg border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                  <h4 className="font-semibold text-white mb-2">
                    🚗 Financiamento
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Financiamento de veículos e bens com garantia
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Tecnologia Avançada
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Regras Personalizáveis
                    </h4>
                    <p className="text-zinc-400">
                      Configure suas próprias regras de aprovação de crédito de
                      acordo com seu modelo de negócio.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Análise Customizada
                    </h4>
                    <p className="text-zinc-400">
                      Defina seus próprios critérios de análise e pontuação de
                      crédito.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-zinc-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Monitoramento Contínuo
                    </h4>
                    <p className="text-zinc-400">
                      Acompanhamento em tempo real do comportamento de
                      pagamento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zinc-200 to-white bg-clip-text text-transparent">
              Fale Conosco
            </h2>
            <p className="text-lg text-zinc-300 mb-12">
              Pronto para transformar seu negócio? Entre em contato conosco e
              descubra como podemos ajudar você a crescer no mercado financeiro.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-zinc-400">negocios@b2btecnologia.io</p>
                <p className="text-zinc-500 text-sm mt-2">
                  Resposta em até 2 horas
                </p>
              </div>
              <div
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-6 rounded-xl backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:bg-zinc-700/40 hover:scale-105 hover:shadow-lg"
                onClick={() =>
                  window.open("https://wa.me/551151976033", "_blank")
                }
              >
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  WhatsApp
                </h3>
                <p className="text-zinc-400">+55 (11) 5197-6033</p>
                <p className="text-zinc-500 text-sm mt-2">Atendimento 24/7</p>
              </div>
            </div>

            <form className="bg-black/20 backdrop-blur-md p-8 rounded-2xl border border-zinc-700/50">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="bg-zinc-800/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="bg-zinc-800/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  className="bg-zinc-800/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                />
                <select className="bg-zinc-800/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-400 transition-colors">
                  <option value="">Área de interesse</option>
                  <option value="banco-digital">Banco Digital</option>
                  <option value="pagamentos">Gateway de Pagamentos</option>
                  <option value="apis">Integrações de API</option>
                  <option value="cartoes">Emissão de Cartões</option>
                  <option value="credito">Soluções de Crédito</option>
                  <option value="completo">Solução Completa</option>
                </select>
              </div>
              <textarea
                placeholder="Conte-nos mais sobre seu projeto e como podemos ajudar..."
                rows={4}
                className="w-full bg-zinc-800/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors mb-6"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-700 hover:to-zinc-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
              <p className="text-zinc-500 text-sm mt-4">
                Ao enviar este formulário, você concorda com nossa política de
                privacidade e aceita receber comunicações da OBD Tech.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logo-obd-branco.png"
                alt="OBD Tech"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-zinc-400 text-sm">
                Transformando o futuro das soluções financeiras com tecnologia
                de ponta e inovação constante.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Soluções</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a
                    href="#banco-digital"
                    className="hover:text-white transition-colors"
                  >
                    Banco Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#pagamentos"
                    className="hover:text-white transition-colors"
                  >
                    Gateway de Pagamentos
                  </a>
                </li>
                <li>
                  <a
                    href="#apis"
                    className="hover:text-white transition-colors"
                  >
                    APIs
                  </a>
                </li>
                <li>
                  <a
                    href="#cartoes"
                    className="hover:text-white transition-colors"
                  >
                    Cartões
                  </a>
                </li>
                <li>
                  <a
                    href="#credito"
                    className="hover:text-white transition-colors"
                  >
                    Crédito
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre Nós
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a
                    href="#contato"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-700/50 pt-8 text-center">
            <p className="text-zinc-400 mb-4">
              © 2025 OBD Tech. Todos os direitos reservados.
            </p>
            <p className="text-zinc-500 text-sm">
              Soluções financeiras inovadoras para o futuro dos negócios.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out;
        }
      `}</style>
    </div>
  );
}
