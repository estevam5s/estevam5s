O GitHub descontinuou o suporte para autenticação com senha ao usar HTTPS a partir de 13 de agosto de 2021.
Agora precisa usar um token de acesso pessoal (PAT) ou configurar uma chave SSH para autenticar suas operações git push e git pull

1. Criar um Token de Acesso Pessoal (PAT)

1.1 Acesse o GitHub:
    Vá para ``GitHub`` e faça login na sua conta.

1.2 Vá para Configurações:
    No canto superior direito da página, clique na sua foto de perfil e selecione `Settings`.

1.3 Acesse a seção de Tokens de Acesso Pessoal:
    No menu lateral esquerdo, vá para `Developer settings` e depois para `Personal access tokens`.

1.4 Gerar um Novo Token:
    Clique em `Generate new token`.

1.5 Preencha as Informações:
    * Dê um nome para o token.
    * Selecione as permissões necessárias. Para operações básicas de Git, você pode selecionar apenas as
      opções `repo` (acesso total ao repositório) e `workflow` (opcional, para GitHub Actions).
    * Clique em `Generate token` no final da página.

1.6 Copie o Token:
    `Importante`: Copie o token gerado e guarde-o em um lugar seguro. Você não poderá vê-lo novamente depois de sair da página.

2. Atualizar a URL do Repositório para Usar o Token

Você pode atualizar a URL remota do seu repositório para incluir seu token de acesso pessoal. Abra o terminal e execute os seguintes comandos:

```bash
# Atualize a URL do repositório com o token
git remote set-url origin https://<TOKEN>@github.com/estevam5s/dot-arch-hyprland.git

# Verifique se a URL foi atualizada corretamente
git remote -v
```

Substitua `<TOKEN>` pelo token que você gerou.

3. Usar o Token para Autenticação

Quando você faz uma operação `git push` ou `git pull`, você será autenticado com o token que está incluído na URL do repositório.

```bash
git push -u origin main
```

4. Alternativa: Usar uma Chave SSH

Outra forma popular de autenticar suas operações Git é usando uma chave SSH. Aqui estão os passos para configurar uma chave SSH:

1.1 Verifique se você já tem uma chave SSH:

```bash
ls -al ~/.ssh
```

Verifique se há arquivos como `id_rsa` e `id_rsa.pub`. Se não houver, gere uma nova chave SSH:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Substitua `"your_email@example.com"` pelo seu e-mail do GitHub.

1.2 Adicione a chave SSH ao ssh-agent:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
```

1.3 Adicione a chave pública ao GitHub:

* Copie o conteúdo da chave pública:

```bash
cat ~/.ssh/id_rsa.pub
```

* Vá para `Settings` > `SSH and GPG keys` > `New SSH key` no GitHub e cole o conteúdo da chave pública na área de texto.

1.4 Atualize a URL do repositório para usar SSH:

```bash
git remote set-url origin git@github.com:estevam5s/dot-arch-hyprland.git
```

1.5 Teste a conexão SSH:

```bash
ssh -T git@github.com
```

Se tudo estiver configurado corretamente, você verá uma mensagem de boas-vindas do GitHub.

5. Outros Métodos de Autenticação

Para mais detalhes sobre métodos de autenticação, você pode consultar a (documentação oficial do GitHub)[https://docs.github.com/pt/authentication].

Seguindo essas etapas, você deve ser capaz de resolver o problema de autenticação e enviar seu repositório para o GitHub. Se você tiver mais dúvidas ou problemas, sinta-se à vontade para perguntar!
