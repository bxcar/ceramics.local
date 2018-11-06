<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'ceramics');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'root');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '9E78Cer&4Lz!QG}3iLbv1]%Cc1#E0KTYXv~Hab>iMQBAL)37w>[andQSf/)m|Xyy');
define('SECURE_AUTH_KEY',  '.a25/DywdA1=J:@?K)H?.dm,>8<Zj*Y@MQd 0`FbYkW`-eK(^CxzKQV`]wE)*=|:');
define('LOGGED_IN_KEY',    'jHj(zuat3BPueUboeG9e:wMZT{5;HH)eyO;hg/[/=WS$){ohtR2*+W^,ZPd/rBTY');
define('NONCE_KEY',        '!pK0_3,4>ZbHUSvHvz<vlz%jOC-s[Q:f.]-Ib@!+SZ-{>|S&?#Ap+7~ HY~q.T4Y');
define('AUTH_SALT',        'k@Pmyae}fuAo}$<7*]Q$NkYby^JI33{9i5flE3]jTj;DC%_&uZQT0ROi-%P$;gDw');
define('SECURE_AUTH_SALT', 'aqP}j,2B3TxW{@5P4CuXO1YhaG:T!+n_yh;JT#;y,2]Ddt~]&_*pp[RHAg|l@==>');
define('LOGGED_IN_SALT',   '3lL6VTt>vo}HJvhkfx3X80*smV&Fpn!ns2WH-nZDk@Pih<}d:$F&g6A?bIj`<6r3');
define('NONCE_SALT',       'G}_(oj6&r4{u~/Z-zwc9hY!oRwfMaXC4+HsdKS~%|11pxr+}ugS(l~#tTX-4dpn%');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
