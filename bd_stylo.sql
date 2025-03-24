-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24/03/2025 às 21:25
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_stylo`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_12_26_223329_create_usuarios_table', 1),
(5, '2024_12_26_225155_create_personal_access_tokens_table', 1),
(6, '2024_12_26_231042_create_verificar_emails_table', 1),
(7, '2025_01_04_001908_create_categorias_table', 1),
(8, '2025_01_04_002244_create_subcategorias_table', 1),
(9, '2025_01_04_003055_create_produtos_table', 1),
(10, '2025_01_17_004914_create_produto_destaques_table', 1),
(11, '2025_01_17_205419_create_destaque_estacaos_table', 1),
(12, '2025_01_25_182805_create_tamanhos_table', 1),
(13, '2025_01_25_183301_create_relacao_tamanho_items_table', 1),
(14, '2025_01_29_162516_create_cors_table', 1),
(15, '2025_01_29_163148_create_relacao_cors_table', 1),
(16, '2025_01_30_171731_create_carrinhos_table', 1),
(17, '2025_01_30_171934_create_carrinho_itens_table', 1),
(18, '2025_02_12_202313_create_a_d_m_s_table', 1),
(19, '2025_02_15_174859_create_favoritos_table', 1),
(20, '2025_03_10_205309_create_verificar_emails_table', 2);

-- --------------------------------------------------------

--
-- Estrutura para tabela `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\ADM', 1, 'admToken', 'b1fde54d6eeaa8f9f6b2733978f6e1f9637e8e654b0b7030254c0e81b618ed19', '[\"*\"]', '2025-03-10 07:31:47', NULL, '2025-03-09 10:45:38', '2025-03-10 07:31:47'),
(2, 'App\\Models\\ADM', 1, 'admToken', '754882e6472937a1c62d4ff3a3a3fee18fc04a3a64352ae54b6b44f955f83089', '[\"*\"]', '2025-03-09 21:47:38', NULL, '2025-03-09 21:45:02', '2025-03-09 21:47:38'),
(3, 'App\\Models\\ADM', 1, 'admToken', '1d3986f59af13dd2cd81f773cd7d8afcb22bda18b2ef75887e62aca7dd4caea5', '[\"*\"]', NULL, NULL, '2025-03-10 07:04:30', '2025-03-10 07:04:30'),
(4, 'App\\Models\\ADM', 1, 'admToken', '001ae34de0d65dbaf45436383b00b4392e08f4b95bbc1f5246c3cd094b1bd8a7', '[\"*\"]', NULL, NULL, '2025-03-10 07:04:32', '2025-03-10 07:04:32'),
(5, 'App\\Models\\ADM', 1, 'admToken', '4619f4a41e3f1d34d381a8710c79c7f6c4ede7b26e745560aaf56fb5d6e004d9', '[\"*\"]', '2025-03-10 07:42:08', NULL, '2025-03-10 07:05:41', '2025-03-10 07:42:08'),
(6, 'App\\Models\\ADM', 1, 'admToken', 'e616d06b81118f68783af1dddf4887672f866d6cec891a20443400344cb090b4', '[\"*\"]', NULL, NULL, '2025-03-18 02:35:59', '2025-03-18 02:35:59'),
(7, 'App\\Models\\ADM', 1, 'admToken', '3c87b4ed8c4c0e578e129745b6d44e6629c9befd0e37c87eda9b21fe70ba67f0', '[\"*\"]', NULL, NULL, '2025-03-18 02:36:15', '2025-03-18 02:36:15'),
(8, 'App\\Models\\ADM', 1, 'admToken', '0fc79714c2c25162b83db162c7492d14dde6c98653c788d662844132d3f27bb2', '[\"*\"]', NULL, NULL, '2025-03-18 04:08:51', '2025-03-18 04:08:51'),
(9, 'App\\Models\\ADM', 1, 'admToken', 'b45a1783f8a7deda7b7651da0d508bcf0e54bcc4d28730eb4dbfda9987c6875e', '[\"*\"]', NULL, NULL, '2025-03-18 04:12:29', '2025-03-18 04:12:29'),
(10, 'App\\Models\\ADM', 1, 'admToken', 'b500a0c7d140d2972fac5a86b5e58571b28f2f5886bb67a093574595ba2e9606', '[\"*\"]', NULL, NULL, '2025-03-18 04:13:35', '2025-03-18 04:13:35'),
(11, 'App\\Models\\ADM', 1, 'admToken', '785b5d89b29441ce807acd73e72fcdb76b41ff38595e22e285aa2fcbda72f09b', '[\"*\"]', '2025-03-18 23:38:14', NULL, '2025-03-18 23:23:51', '2025-03-18 23:38:14'),
(12, 'App\\Models\\ADM', 2, 'admToken', 'cf11d58b31b79befc5cb41979b30df470531c92ffe12a1f438af4296f54a233d', '[\"*\"]', NULL, NULL, '2025-03-24 08:02:31', '2025-03-24 08:02:31'),
(13, 'App\\Models\\ADM', 2, 'admToken', '362e6ac0c1e3b3e5dc6fb69fc296e463029e7aa07990d82908c36bb4abcbef4f', '[\"*\"]', NULL, NULL, '2025-03-24 08:55:15', '2025-03-24 08:55:15'),
(14, 'App\\Models\\ADM', 2, 'admToken', 'ebf8da9587a8914d82f9df5298e9327cfffae1ee8b83bba796e573d06973bc61', '[\"*\"]', '2025-03-24 22:38:27', NULL, '2025-03-24 19:41:17', '2025-03-24 22:38:27');

-- --------------------------------------------------------

--
-- Estrutura para tabela `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_adm`
--

CREATE TABLE `tb_adm` (
  `id_adm` int(10) UNSIGNED NOT NULL,
  `nome_adm` varchar(255) NOT NULL,
  `cpf_adm` varchar(255) NOT NULL,
  `senha_adm` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_adm`
--

INSERT INTO `tb_adm` (`id_adm`, `nome_adm`, `cpf_adm`, `senha_adm`) VALUES
(1, 'adm', '495.541.348-03', '12345678'),
(2, 'adm2', '495.541.348-05', '$2y$12$G8HeBTS/matiOG4YlGGuguBtrQpK/779WNF.dv4LF/cPhG3Uxsi9m');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_carrinho`
--

CREATE TABLE `tb_carrinho` (
  `id_carrinho` int(10) UNSIGNED NOT NULL,
  `fk_usuario` int(10) UNSIGNED NOT NULL,
  `total_carrinho` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_carrinho`
--

INSERT INTO `tb_carrinho` (`id_carrinho`, `fk_usuario`, `total_carrinho`) VALUES
(3, 11, 0.00);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_carrinho_itens`
--

CREATE TABLE `tb_carrinho_itens` (
  `id_carrinho_itens` int(10) UNSIGNED NOT NULL,
  `fk_produto` int(10) UNSIGNED NOT NULL,
  `fk_carrinho` int(10) UNSIGNED NOT NULL,
  `preco_itens` decimal(10,2) NOT NULL,
  `fk_cor` int(10) UNSIGNED NOT NULL,
  `fk_tamanho` int(10) UNSIGNED NOT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_carrinho_itens`
--

INSERT INTO `tb_carrinho_itens` (`id_carrinho_itens`, `fk_produto`, `fk_carrinho`, `preco_itens`, `fk_cor`, `fk_tamanho`, `quantidade`) VALUES
(8, 72, 3, 69.98, 1, 2, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_categoria`
--

CREATE TABLE `tb_categoria` (
  `id_categoria` int(10) UNSIGNED NOT NULL,
  `nome_categoria` varchar(255) NOT NULL,
  `imagem_categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_categoria`
--

INSERT INTO `tb_categoria` (`id_categoria`, `nome_categoria`, `imagem_categoria`) VALUES
(1, 'Feminino', 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/categorias%2Ffeminina.png?alt=media&token=9b7b59d2-8042-4339-8dd7-89e633857ddb'),
(2, 'masculino', 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/categorias%2Fcole%C3%A7%C3%A3o.png?alt=media&token=1ddede90-0743-402e-8afd-5d5ad3a326b1');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_cor`
--

CREATE TABLE `tb_cor` (
  `id_cor` int(10) UNSIGNED NOT NULL,
  `desc_cor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_cor`
--

INSERT INTO `tb_cor` (`id_cor`, `desc_cor`) VALUES
(1, 'preto'),
(2, 'branco'),
(3, 'azul'),
(4, 'branco'),
(5, 'rosa');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_favorito`
--

CREATE TABLE `tb_favorito` (
  `id_favorito` int(10) UNSIGNED NOT NULL,
  `fk_usuario` int(10) UNSIGNED NOT NULL,
  `fk_produto` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_favorito`
--

INSERT INTO `tb_favorito` (`id_favorito`, `fk_usuario`, `fk_produto`) VALUES
(3, 11, 69);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_produto`
--

CREATE TABLE `tb_produto` (
  `id_produto` int(10) UNSIGNED NOT NULL,
  `nome_produto` varchar(255) NOT NULL,
  `desc_produto` varchar(255) NOT NULL,
  `preco_antigo_produto` decimal(10,2) NOT NULL,
  `preco_produto` decimal(10,2) NOT NULL,
  `imagem_produto` varchar(255) NOT NULL,
  `fk_subCategoria` int(10) UNSIGNED NOT NULL,
  `destaque` tinyint(1) NOT NULL,
  `destaque_estacao` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_produto`
--

INSERT INTO `tb_produto` (`id_produto`, `nome_produto`, `desc_produto`, `preco_antigo_produto`, `preco_produto`, `imagem_produto`, `fk_subCategoria`, `destaque`, `destaque_estacao`) VALUES
(67, 'Moletom Feminino', 'moltom muito lindo', 300.00, 150.00, 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/produtos%2Fmoletom2Feminino%20(1).png?alt=media&token=5b43e05c-b59c-40d3-82d2-c9d09db76651', 5, 0, 0),
(68, 'Vestido basico', 'desc vestido aaaaaaaaaaaaaa', 300.00, 250.00, 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/produtos%2Fvestido%20inverno%20(1).png?alt=media&token=ab0b3c25-db64-4a24-8dc5-f55e213a04c8', 1, 1, 1),
(69, 'Vestido inverno', 'descrição vestido aaaaaaaaaaaaaa', 300.00, 250.00, 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/produtos%2Fvesitido%202Inverno%20(1).png?alt=media&token=dfb2eb76-6cf6-4e3b-b3db-47ebd19dd3c3', 1, 1, 1),
(70, 'Vestido inverno', 'descrição aaaaaaaaaaaa', 300.00, 150.00, 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/produtos%2Fvestido.png?alt=media&token=49eb1e38-9264-4cb5-b63a-f78353acb767', 1, 1, 1),
(71, 'Vestido elegante', 'descrição vestido aaaaaa', 300.00, 150.00, 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/produtos%2Fvestido%20trico%20(1).png?alt=media&token=16671756-59bd-47ac-a9ab-6db9e64604c2', 1, 1, 1),
(72, 'Cropped', 'descrição aaaaaaaaaaaaaaaaa', 90.00, 34.99, 'https://firebasestorage.googleapis.com/v0/b/snackfast-6ef93.appspot.com/o/produtos%2Fcropped%20(1).png?alt=media&token=116c6b65-fb14-48a8-969c-043f44f4a7e3', 6, 0, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_produto_destaque`
--

CREATE TABLE `tb_produto_destaque` (
  `id_produto_destaque` int(10) UNSIGNED NOT NULL,
  `fk_produto` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_produto_destaque`
--

INSERT INTO `tb_produto_destaque` (`id_produto_destaque`, `fk_produto`) VALUES
(1, 68),
(3, 69),
(4, 70),
(2, 71);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_produto_destaque_estacao`
--

CREATE TABLE `tb_produto_destaque_estacao` (
  `id_p_destaque_estacao` int(10) UNSIGNED NOT NULL,
  `fk_produto` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_produto_destaque_estacao`
--

INSERT INTO `tb_produto_destaque_estacao` (`id_p_destaque_estacao`, `fk_produto`) VALUES
(1, 68);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_relacao_cor`
--

CREATE TABLE `tb_relacao_cor` (
  `id_relacao_cor` int(10) UNSIGNED NOT NULL,
  `fk_item` int(10) UNSIGNED NOT NULL,
  `fk_cor` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_relacao_cor`
--

INSERT INTO `tb_relacao_cor` (`id_relacao_cor`, `fk_item`, `fk_cor`) VALUES
(43, 67, 1),
(44, 72, 1),
(45, 68, 1),
(46, 71, 5),
(47, 70, 1),
(48, 69, 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_relacao_tamanho`
--

CREATE TABLE `tb_relacao_tamanho` (
  `id_relacao_tamanho` int(10) UNSIGNED NOT NULL,
  `fk_item` int(10) UNSIGNED NOT NULL,
  `fk_tamanho` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_relacao_tamanho`
--

INSERT INTO `tb_relacao_tamanho` (`id_relacao_tamanho`, `fk_item`, `fk_tamanho`) VALUES
(44, 67, 1),
(45, 72, 2),
(46, 72, 3),
(47, 68, 2),
(48, 71, 1),
(49, 69, 3),
(50, 70, 2),
(61, 68, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_subcategoria`
--

CREATE TABLE `tb_subcategoria` (
  `id_subCategoria` int(10) UNSIGNED NOT NULL,
  `nome_subCategoria` varchar(255) NOT NULL,
  `fk_categoria` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_subcategoria`
--

INSERT INTO `tb_subcategoria` (`id_subCategoria`, `nome_subCategoria`, `fk_categoria`) VALUES
(1, 'vestido', 1),
(2, 'jaqueta', 2),
(3, 'jeans', 1),
(4, 'Saia', 1),
(5, 'Moletom', 1),
(6, 'cropped', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_tamanho`
--

CREATE TABLE `tb_tamanho` (
  `id_tamanho` int(10) UNSIGNED NOT NULL,
  `desc_tamanho` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_tamanho`
--

INSERT INTO `tb_tamanho` (`id_tamanho`, `desc_tamanho`) VALUES
(1, 'p'),
(2, 'm'),
(3, 'g');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `id_usuario` int(10) UNSIGNED NOT NULL,
  `cpf_usuario` varchar(255) NOT NULL,
  `nome_usuario` varchar(255) NOT NULL,
  `email_usuario` varchar(255) NOT NULL,
  `numero_usuario` varchar(255) NOT NULL,
  `senha_usuario` varchar(255) NOT NULL,
  `confirmado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tb_usuario`
--

INSERT INTO `tb_usuario` (`id_usuario`, `cpf_usuario`, `nome_usuario`, `email_usuario`, `numero_usuario`, `senha_usuario`, `confirmado`) VALUES
(11, '495.541.348-01', 'faixa', 'davifreitaz999@gmail.com', '(22)222222222', '$2y$12$gDXLGLvLTCOMZh8x3piNLuTYsinhPw2mVqOcEt1jZSDmTulZUeQV2', 1),
(29, '495-541-348-00', 'Davi Freitas', 'freitaadavi20@gmail.com', '11952041573', '$2y$12$RHfkVCjEp4wqb6/1MpmGfeVYMRNPJZINqa2.MpQWpaVB8LHNzHQIq', 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_verificar_email`
--

CREATE TABLE `tb_verificar_email` (
  `id_verificar_email` int(10) UNSIGNED NOT NULL,
  `email_usuario` varchar(255) NOT NULL,
  `codigo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Índices de tabela `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Índices de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Índices de tabela `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Índices de tabela `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Índices de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Índices de tabela `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Índices de tabela `tb_adm`
--
ALTER TABLE `tb_adm`
  ADD PRIMARY KEY (`id_adm`);

--
-- Índices de tabela `tb_carrinho`
--
ALTER TABLE `tb_carrinho`
  ADD PRIMARY KEY (`id_carrinho`),
  ADD KEY `tb_carrinho_fk_usuario_foreign` (`fk_usuario`);

--
-- Índices de tabela `tb_carrinho_itens`
--
ALTER TABLE `tb_carrinho_itens`
  ADD PRIMARY KEY (`id_carrinho_itens`),
  ADD KEY `tb_carrinho_itens_fk_produto_foreign` (`fk_produto`),
  ADD KEY `tb_carrinho_itens_fk_carrinho_foreign` (`fk_carrinho`),
  ADD KEY `tb_carrinho_itens_fk_cor_foreign` (`fk_cor`),
  ADD KEY `tb_carrinho_itens_fk_tamanho_foreign` (`fk_tamanho`);

--
-- Índices de tabela `tb_categoria`
--
ALTER TABLE `tb_categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Índices de tabela `tb_cor`
--
ALTER TABLE `tb_cor`
  ADD PRIMARY KEY (`id_cor`);

--
-- Índices de tabela `tb_favorito`
--
ALTER TABLE `tb_favorito`
  ADD PRIMARY KEY (`id_favorito`),
  ADD KEY `tb_favorito_fk_usuario_foreign` (`fk_usuario`),
  ADD KEY `tb_favorito_fk_produto_foreign` (`fk_produto`);

--
-- Índices de tabela `tb_produto`
--
ALTER TABLE `tb_produto`
  ADD PRIMARY KEY (`id_produto`),
  ADD KEY `tb_produto_fk_subcategoria_foreign` (`fk_subCategoria`);

--
-- Índices de tabela `tb_produto_destaque`
--
ALTER TABLE `tb_produto_destaque`
  ADD PRIMARY KEY (`id_produto_destaque`),
  ADD KEY `tb_produto_destaque_fk_produto_foreign` (`fk_produto`);

--
-- Índices de tabela `tb_produto_destaque_estacao`
--
ALTER TABLE `tb_produto_destaque_estacao`
  ADD PRIMARY KEY (`id_p_destaque_estacao`),
  ADD KEY `tb_produto_destaque_estacao_fk_produto_foreign` (`fk_produto`);

--
-- Índices de tabela `tb_relacao_cor`
--
ALTER TABLE `tb_relacao_cor`
  ADD PRIMARY KEY (`id_relacao_cor`),
  ADD KEY `tb_relacao_cor_fk_item_foreign` (`fk_item`),
  ADD KEY `tb_relacao_cor_fk_cor_foreign` (`fk_cor`);

--
-- Índices de tabela `tb_relacao_tamanho`
--
ALTER TABLE `tb_relacao_tamanho`
  ADD PRIMARY KEY (`id_relacao_tamanho`),
  ADD KEY `tb_relacao_tamanho_fk_item_foreign` (`fk_item`),
  ADD KEY `tb_relacao_tamanho_fk_tamanho_foreign` (`fk_tamanho`);

--
-- Índices de tabela `tb_subcategoria`
--
ALTER TABLE `tb_subcategoria`
  ADD PRIMARY KEY (`id_subCategoria`),
  ADD KEY `tb_subcategoria_fk_categoria_foreign` (`fk_categoria`);

--
-- Índices de tabela `tb_tamanho`
--
ALTER TABLE `tb_tamanho`
  ADD PRIMARY KEY (`id_tamanho`);

--
-- Índices de tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Índices de tabela `tb_verificar_email`
--
ALTER TABLE `tb_verificar_email`
  ADD PRIMARY KEY (`id_verificar_email`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `tb_adm`
--
ALTER TABLE `tb_adm`
  MODIFY `id_adm` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_carrinho`
--
ALTER TABLE `tb_carrinho`
  MODIFY `id_carrinho` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tb_carrinho_itens`
--
ALTER TABLE `tb_carrinho_itens`
  MODIFY `id_carrinho_itens` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `tb_categoria`
--
ALTER TABLE `tb_categoria`
  MODIFY `id_categoria` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `tb_cor`
--
ALTER TABLE `tb_cor`
  MODIFY `id_cor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `tb_favorito`
--
ALTER TABLE `tb_favorito`
  MODIFY `id_favorito` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tb_produto`
--
ALTER TABLE `tb_produto`
  MODIFY `id_produto` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de tabela `tb_produto_destaque`
--
ALTER TABLE `tb_produto_destaque`
  MODIFY `id_produto_destaque` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de tabela `tb_produto_destaque_estacao`
--
ALTER TABLE `tb_produto_destaque_estacao`
  MODIFY `id_p_destaque_estacao` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `tb_relacao_cor`
--
ALTER TABLE `tb_relacao_cor`
  MODIFY `id_relacao_cor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de tabela `tb_relacao_tamanho`
--
ALTER TABLE `tb_relacao_tamanho`
  MODIFY `id_relacao_tamanho` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT de tabela `tb_subcategoria`
--
ALTER TABLE `tb_subcategoria`
  MODIFY `id_subCategoria` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `tb_tamanho`
--
ALTER TABLE `tb_tamanho`
  MODIFY `id_tamanho` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id_usuario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `tb_verificar_email`
--
ALTER TABLE `tb_verificar_email`
  MODIFY `id_verificar_email` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `tb_carrinho`
--
ALTER TABLE `tb_carrinho`
  ADD CONSTRAINT `tb_carrinho_fk_usuario_foreign` FOREIGN KEY (`fk_usuario`) REFERENCES `tb_usuario` (`id_usuario`);

--
-- Restrições para tabelas `tb_carrinho_itens`
--
ALTER TABLE `tb_carrinho_itens`
  ADD CONSTRAINT `tb_carrinho_itens_fk_carrinho_foreign` FOREIGN KEY (`fk_carrinho`) REFERENCES `tb_carrinho` (`id_carrinho`),
  ADD CONSTRAINT `tb_carrinho_itens_fk_cor_foreign` FOREIGN KEY (`fk_cor`) REFERENCES `tb_cor` (`id_cor`),
  ADD CONSTRAINT `tb_carrinho_itens_fk_produto_foreign` FOREIGN KEY (`fk_produto`) REFERENCES `tb_produto` (`id_produto`),
  ADD CONSTRAINT `tb_carrinho_itens_fk_tamanho_foreign` FOREIGN KEY (`fk_tamanho`) REFERENCES `tb_tamanho` (`id_tamanho`);

--
-- Restrições para tabelas `tb_favorito`
--
ALTER TABLE `tb_favorito`
  ADD CONSTRAINT `tb_favorito_fk_produto_foreign` FOREIGN KEY (`fk_produto`) REFERENCES `tb_produto` (`id_produto`) ON DELETE CASCADE,
  ADD CONSTRAINT `tb_favorito_fk_usuario_foreign` FOREIGN KEY (`fk_usuario`) REFERENCES `tb_usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Restrições para tabelas `tb_produto`
--
ALTER TABLE `tb_produto`
  ADD CONSTRAINT `tb_produto_fk_subcategoria_foreign` FOREIGN KEY (`fk_subCategoria`) REFERENCES `tb_subcategoria` (`id_subCategoria`);

--
-- Restrições para tabelas `tb_produto_destaque`
--
ALTER TABLE `tb_produto_destaque`
  ADD CONSTRAINT `tb_produto_destaque_fk_produto_foreign` FOREIGN KEY (`fk_produto`) REFERENCES `tb_produto` (`id_produto`);

--
-- Restrições para tabelas `tb_produto_destaque_estacao`
--
ALTER TABLE `tb_produto_destaque_estacao`
  ADD CONSTRAINT `tb_produto_destaque_estacao_fk_produto_foreign` FOREIGN KEY (`fk_produto`) REFERENCES `tb_produto` (`id_produto`);

--
-- Restrições para tabelas `tb_relacao_cor`
--
ALTER TABLE `tb_relacao_cor`
  ADD CONSTRAINT `tb_relacao_cor_fk_cor_foreign` FOREIGN KEY (`fk_cor`) REFERENCES `tb_cor` (`id_cor`),
  ADD CONSTRAINT `tb_relacao_cor_fk_item_foreign` FOREIGN KEY (`fk_item`) REFERENCES `tb_produto` (`id_produto`);

--
-- Restrições para tabelas `tb_relacao_tamanho`
--
ALTER TABLE `tb_relacao_tamanho`
  ADD CONSTRAINT `tb_relacao_tamanho_fk_item_foreign` FOREIGN KEY (`fk_item`) REFERENCES `tb_produto` (`id_produto`),
  ADD CONSTRAINT `tb_relacao_tamanho_fk_tamanho_foreign` FOREIGN KEY (`fk_tamanho`) REFERENCES `tb_tamanho` (`id_tamanho`);

--
-- Restrições para tabelas `tb_subcategoria`
--
ALTER TABLE `tb_subcategoria`
  ADD CONSTRAINT `tb_subcategoria_fk_categoria_foreign` FOREIGN KEY (`fk_categoria`) REFERENCES `tb_categoria` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
