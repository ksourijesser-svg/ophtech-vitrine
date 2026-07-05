"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Ophtech est-il uniquement destiné aux ophtalmologistes ?",
    a: "Oui. Contrairement aux logiciels médicaux génériques, Ophtech est conçu exclusivement pour l'ophtalmologie : ordonnances lunettes, planification de chirurgies oculaires, suivi des consultations spécialisées, etc.",
  },
  {
    q: "Dois-je installer un logiciel sur mon ordinateur ?",
    a: "Non. Ophtech est une application 100% en ligne. Vous y accédez depuis n'importe quel navigateur, sur ordinateur, tablette ou mobile, sans installation ni maintenance.",
  },
  {
    q: "Mes données patients sont-elles en sécurité ?",
    a: "Absolument. Les données de chaque cabinet sont strictement isolées, les mots de passe chiffrés et l'accès protégé par authentification. La confidentialité des données de santé est notre priorité.",
  },
  {
    q: "Mes patients peuvent-ils prendre rendez-vous en ligne ?",
    a: "Oui. Vous disposez d'une page publique personnalisée où vos patients réservent un créneau en quelques secondes. Le rendez-vous apparaît immédiatement dans votre agenda.",
  },
  {
    q: "La secrétaire a-t-elle son propre accès ?",
    a: "Oui. Ophtech gère plusieurs rôles : médecin, secrétaire et patient. Chacun accède uniquement aux fonctionnalités qui le concernent.",
  },
  {
    q: "Puis-je essayer avant de m'engager ?",
    a: "Bien sûr. Vous pouvez démarrer gratuitement et sans engagement. Demandez une démo et découvrez la plateforme en conditions réelles.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div
                  className={`glass overflow-hidden rounded-2xl ${
                    isOpen ? "border-accent/40" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-foreground">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/65">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
